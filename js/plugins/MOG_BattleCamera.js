//=============================================================================
// MOG_BattleCamera.js
//=============================================================================

/*:
 * @plugindesc (v1.3) 战斗 - 动态镜头
 * @author Moghunter （Drill_up翻译）
 *
 * @param 镜头缩放
 * @type number
 * @min 0
 * @desc 0表示背景完全不缩放，50表示背景放大50%。
 * 只放大原来视野内的图。
 * @default 50
 *
 * @param 镜头移动速度
 * @type number
 * @min 0
 * @desc 镜头移动到目标位置的速度，单位 像素/帧。
 * @default 30 
 *
 * @param 镜头聚焦延迟
 * @type number
 * @min 0
 * @desc 镜头移动延迟的时间。20表示20帧后开始移动镜头。
 * （1秒60帧）
 * @default 20  
 *
 * @param 偏移-镜头 X
 * @desc 默认镜头聚焦目标的中心，在中心的基础上x轴方向偏移，单位像素。（可为负数）
 * @default 0
 *
 * @param 偏移-镜头 Y
 * @desc 默认镜头聚焦目标的中心，在中心的基础上y轴方向偏移，单位像素。（可为负数）
 * @default 0
 *
 * @help  
 * =============================================================================
 * +++ MOG - Battle Camera (v1.3) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 镜头会对背景进行适当缩放，当指针选中敌人时，镜头会更具敌人的位置进行动态
 * 移动。
 * ★★最好与动态战斗背景MOG_BattlebackEX插件配合使用★★
 *
 * -----------------------------------------------------------------------------
 * ----素材规则
 * rmmv自身会把背景图进行裁剪！数据库中背景和真实运行起来的背景完全不一样！
 * （如果你希望玩家能完整看见素材背景图的全貌，去资源文件中看图示。）
 *
 * 背景图大小控制原理：固定816*624的窗口。
 *     如果图片大了，放置在中心，只显示816*624。
 *     如果图片小了，会强行拉扯成1000*740的图片，然后只显示816*624。
 *     范围内的图，放大缩小窗口都只是对816*624的内容进行缩放。
 *  【具体情况看资源中的切割图示，红线表示不用插件，rmmv默认让玩家看到的被
 *   裁剪的区域，黄线表示使用插件后，额外裁剪的部分。】
 *
 * 镜头则根据已经处理好的背景和动态背景，进行放大缩小。
 * （所以资源图片内容有816*624就够了，然后添加白边成1000*740的图片。）
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以在进入战斗前，设置镜头处理。
 * 
 * 插件指令：camera_range : A
 *
 * 插件控制镜头缩放。参数A表示镜头的缩放值。
 *
 * 插件指令：camera_speed : A
 *
 * 插件控制镜头移动速度。参数A表示镜头的移动速度，单位 像素/帧。
 * 
 * 插件指令（开启）：enable_camera
 * 插件指令（关闭）：disable_camera
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_BattleCamera = true;
　　var Moghunter = Moghunter || {}; 

    Moghunter.parameters = PluginManager.parameters('MOG_BattleCamera');
	Moghunter.bcam_x = Number(Moghunter.parameters['平移-镜头 X'] || 0);
	Moghunter.bcam_y = Number(Moghunter.parameters['平移-镜头 Y'] || 0);
	Moghunter.bcam_range = Number(Moghunter.parameters['镜头缩放'] || 50);
    Moghunter.bcam_speed = Number(Moghunter.parameters['镜头移动速度'] || 30);
	Moghunter.bcam_ftime = Number(Moghunter.parameters['镜头聚焦延迟'] || 20);
	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bcam_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_bcam_temp_initialize.call(this);
    this.clearBattleCamera();
};

//==============================
// * Initialize
//==============================
Game_Temp.prototype.clearBattleCamera = function() {
	this._bcamPos = [0,0];
	this._bcam_actor = [null,[0,0]];
	this._bcam_target = [null,[0,0]];
	this._bcam_target_turn = [null,[0,0]];
	this._bcam_user = [null,[0,0],0];
	this._bcam_allTargets = false;
	this._bcam_allTargets_turn = false;
	this._bcam_phase = [0,0,0,0,0];
	this._bcam_moving = false;
	this._battleEnd = false;
};

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bcam_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_bcam_sys_initialize.call(this);
	var nr = Math.min(Math.max(Moghunter.bcam_range,0),100);
	var ns = Math.min(Math.max(Moghunter.bcam_speed,0),500);
	var nw = Math.min(Math.max(Moghunter.bcam_ftime,0),100);
    this._cam_data = [true, nr,ns,nw];
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_bcam_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_bcam_pluginCommand.call(this,command, args)
	if (command === "camera_range")  {$gameSystem._cam_data[1] = Math.min(Math.max(args[1],0),100)};
	if (command === "camera_speed")  {$gameSystem._cam_data[2] = Math.min(Math.max(args[1],0),500)};
	if (command === "enable_camera")  { $gameSystem._cam_data[0] = true};
	if (command === "disable_camera")  { $gameSystem._cam_data[0] = false};
	return true;
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// * onSelectAction
//==============================
var _alias_mog_bcam_onSelectAction = Scene_Battle.prototype.onSelectAction;
Scene_Battle.prototype.onSelectAction = function() {
	var action = BattleManager.inputtingAction();
	$gameTemp._bcam_allTargets = action.isForAll();
	_alias_mog_bcam_onSelectAction.call(this);    
};

//=============================================================================
// ** Window BattleActor
//=============================================================================

//==============================
// * Hide
//==============================
var _alias_mog_bcam_wba_hide = Window_BattleActor.prototype.hide;
Window_BattleActor.prototype.hide = function() {
    _alias_mog_bcam_wba_hide.call(this);
    $gameTemp._bcam_allTargets = false;
	$gameTemp._bcam_target = null;
};

//==============================
// * Select
//==============================
var _mog_alias_bcam_wba_select = Window_BattleActor.prototype.select;
Window_BattleActor.prototype.select = function(index) {
    _mog_alias_bcam_wba_select.call(this,index);
	$gameTemp._bcam_target = [null,[0,0]];
	if (this.actor()) {$gameTemp._bcam_target[0] = this.actor();};
};

//=============================================================================
// ** Window BattleEnemy
//=============================================================================

//==============================
// * Hide
//==============================
var _alias_mog_bcam_wbe_hide = Window_BattleEnemy.prototype.hide; 
Window_BattleEnemy.prototype.hide = function() {
	_alias_mog_bcam_wbe_hide.call(this);
	$gameTemp._bcam_allTargets = false;
	$gameTemp._bcam_target = null;
};

//==============================
// * Select
//==============================
var _mog_alias_batcam_wbe_select = Window_BattleEnemy.prototype.select;
Window_BattleEnemy.prototype.select = function(index) {
    _mog_alias_batcam_wbe_select.call(this,index)
	$gameTemp._bcam_target = [null,[0,0]];
	if (this.enemy()) {$gameTemp._bcam_target[0] = this.enemy();};
};

//=============================================================================
// ** Battle Manager
//=============================================================================

//==============================
// * Camera Clear
//==============================
BattleManager.camera_clear = function() {
	$gameTemp._bcam_user = [null,[0,0],0];
	$gameTemp._bcam_target_turn = [null,[0,0]];
	$gameTemp._bcam_allTargets_turn = false;
	$gameTemp._bcam_moving = false;	
	$gameTemp._bcamPos = [0,0];
};

//==============================
// * End Turn
//==============================
var _alias_mog_bcam_bmger_endTurn = BattleManager.endTurn;
BattleManager.endTurn = function() {
	_alias_mog_bcam_bmger_endTurn.call(this);
	$gameTemp._bcam_user = [null,[0,0],0];
    this.camera_clear();
};

//==============================
// * Start Action
//==============================
var _alias_mog_bcam_bmger_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
	 _alias_mog_bcam_bmger_startAction.call(this);
     this.camera_clear();
	 $gameTemp._bcam_user = [this._subject,[0,0],$gameSystem._cam_data[3]];
	 $gameTemp._bcam_target_turn[0] = this._targets[0];
	 if (this._targets.length > 1) {$gameTemp._bcam_allTargets_turn = true};
};

//==============================
// * processVictory
//==============================
var _alias_mog_bcam_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 $gameTemp._battleEnd = true;
	_alias_mog_bcam_processVictory.call(this);	 
};

//==============================
// * processAbort
//==============================
var _alias_mog_bcam_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	 $gameTemp._battleEnd = true;
	_alias_mog_bcam_processAbort.call(this);	 
};

//==============================
// * processDefeat
//==============================
var _alias_mog_bcam_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	 $gameTemp._battleEnd = true;
	 _alias_mog_bcam_processDefeat.call(this);	 
};

//=============================================================================
// ** Spriteset Battler
//=============================================================================

//==============================
// * Update Position
//==============================
var _alias_mog_bcam_sprbat_updatePosition = Sprite_Battler.prototype.updatePosition;
Sprite_Battler.prototype.updatePosition = function() {
	_alias_mog_bcam_sprbat_updatePosition.call(this);
    this.updateBattleCameraPosition();
};

//==============================
// * Update Battle Camera Pos
//==============================
Sprite_Battler.prototype.updateBattleCameraPosition = function() {
	$gameTemp._bcam_actor[0] = BattleManager.actor();
	if ($gameTemp._bcam_target && $gameTemp._bcam_target[0] === this._battler) {this.update_focus_target()};
	if ($gameTemp._bcam_target_turn && $gameTemp._bcam_target_turn[0] === this._battler) {this.update_focus_target_turn()};
	if ($gameTemp._bcam_user && $gameTemp._bcam_user[0] === this._battler) {this.update_focus_user()};
	if ($gameTemp._bcam_actor && $gameTemp._bcam_actor[0] === this._battler) {this.update_focus_actor()};
};

//==============================
// * Cam Y
//==============================
Sprite_Battler.prototype.cam_th = function() {
	   if (this._mainSprite) {
		  return this.y - (this._mainSprite.height / 2);
	   } else {
          return this.y - (this.bitmap.height / 2);
	   };
};

//==============================
// * Update Focus Actor
//==============================
Sprite_Battler.prototype.update_focus_actor = function() {
	  $gameTemp._bcam_actor[1][0] = this.x;
      $gameTemp._bcam_actor[1][1] = this.cam_th();
};

//==============================
// * Update Focus Target
//==============================
Sprite_Battler.prototype.update_focus_target = function() {
	   $gameTemp._bcam_target[1][0] = this.x;
       $gameTemp._bcam_target[1][1] = this.cam_th();
};

//==============================
// * Update Focus Target Turn
//==============================
Sprite_Battler.prototype.update_focus_target_turn = function() {
	   $gameTemp._bcam_target_turn[1][0] = this.x;
       $gameTemp._bcam_target_turn[1][1] = this.cam_th();
};
	
//==============================
// * Update Focus user
//==============================
Sprite_Battler.prototype.update_focus_user = function() {
	   $gameTemp._bcam_user[1][0] = this.x;
       $gameTemp._bcam_user[1][1] = this.cam_th();
};	

//=============================================================================
// ** Spriteset Battle
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bcam_sprt_initialize = Spriteset_Battle.prototype.initialize;
Spriteset_Battle.prototype.initialize = function() {
	this.battleCamSetup();
	_alias_mog_bcam_sprt_initialize.call(this);	
};
	
//==============================
// * Battle Cam Setup
//==============================
Spriteset_Battle.prototype.battleCamSetup = function() {
    $gameTemp.clearBattleCamera(); 
	this._center = [(Graphics.boxWidth / 2),(Graphics.boxHeight / 2)];	
	this._camera_range = $gameSystem._cam_data[1];
	this._camera_speed = $gameSystem._cam_data[2];
    lm_x = this._center[0] * this.cam_range();
    lm_y = this._center[1] * this.cam_range();
	this._cam_limit = [-lm_x,lm_x,-lm_y, lm_y];
	this._cam_XF = Moghunter.bcam_x;
	this._cam_YF = Moghunter.bcam_y; 
	this.cam_center();
};

//==============================
// * Cam Speed
//==============================
Spriteset_Battle.prototype.cam_speed = function() {
	return this._camera_speed;
};
	
//==============================
// * Cam Range
//==============================
Spriteset_Battle.prototype.cam_range = function() {
	return this._camera_range / 100;
};	
	
//==============================
// * locateBattleback
//==============================
var _alias_mog_bcam_locateBattleback = Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
	  if ($gameSystem._cam_data[0]) {
         if (this.scale_back) {return};
	     if (!this._back1Sprite.bitmap.isReady()||!this._back2Sprite.bitmap.isReady()) {return};
	     this.scale_back = true;
	     this.setBackScaleCam(this._back1Sprite);
		 this.setBackScaleCam(this._back2Sprite);
		 if (Imported.MOG_BattlebackEX) {
		 	for (var i = 2; i < this._bbData.length; i++) {	   
			   this.setBackScaleCam(this._backSpriteEx[i]);
	        };
	     };
		 return
      };
	  _alias_mog_bcam_locateBattleback.call(this);
};

//==============================
// * SetBackScaleCam
//==============================
Spriteset_Battle.prototype.setBackScaleCam = function(sprite) {
	  if (!sprite.bitmap) {return};
	  var margin = 32;
	  var center_x = Graphics.boxWidth * this.cam_range();
	  var center_y = Graphics.boxHeight * this.cam_range();
	  var width = Graphics.boxWidth  + (center_x * 2) + margin * 2;
	  var height = Graphics.boxHeight + (center_y * 2) + margin * 2;
	  if (sprite.bitmap.width < width) {sprite.scale.x = width / sprite.bitmap.width};
	  if (sprite.bitmap.height < height) {sprite.scale.y = height / sprite.bitmap.height};
      this.sizeBattleback(sprite);
	  if (Utils.RPGMAKER_VERSION >= "1.3.3") this.setCamBBOrgInit(sprite);
	  this.centerBattleback(sprite,width,height);
};	
	
//==============================
// * set Cam BB Org Int
//==============================
Spriteset_Battle.prototype.setCamBBOrgInit = function(sprite) {
    sprite.origin.x = Graphics.boxWidth / 2;;
	sprite.origin.y = Graphics.boxHeight / 2;
};		
	
//==============================
// * SiszeBattleback
//==============================
Spriteset_Battle.prototype.sizeBattleback = function(sprite,nw,nh) {
	  var margin = 32;
      var width = Graphics.width + margin * 2;
      var height = Graphics.height + margin * 2;	
	  if (sprite.bitmap.width > width) {width = sprite.bitmap.width };
	  if (sprite.bitmap.height > height) {height = sprite.bitmap.height};
	  sprite.move(-margin,-margin,width, height);
};	
	
//==============================
// * SetBackScaleCam
//==============================
Spriteset_Battle.prototype.centerBattleback = function(sprite) {
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	sprite.x = this._center[0];
	sprite.y = this._center[1];
};
	
//==============================
// * Create BattleBack
//==============================
var _alias_mog_bcam_sprt_createBattleback = Spriteset_Battle.prototype.createBattleback
Spriteset_Battle.prototype.createBattleback = function() {
	_alias_mog_bcam_sprt_createBattleback.call(this);
	if ($gameSystem._cam_data[0]) {
		 this.centerBattleback(this._back1Sprite);
		 this.centerBattleback(this._back2Sprite);
	};
};

//==============================
// * Cam Center
//==============================
Spriteset_Battle.prototype.cam_center = function() {
	this._cam_X = this._center[0];
	this._cam_Y = this._center[1];
};

//==============================
// * Need Center Cam
//==============================
Spriteset_Battle.prototype.needCenterCam = function() {
	if ($gameTemp._bcam_allTargets) {return true};
	if ($gameTemp._bcam_allTargets_turn) {return true};
	if ($gameTemp._battleEnd) {return true};
	return false
};

//==============================
// * Update Cam Position
//==============================
Spriteset_Battle.prototype.update_cam_position= function() {
	if (this.needCenterCam()) {this.cam_center();return};
    if (this.updateFocus());
};

//==============================
// * Update Focus
//==============================
Spriteset_Battle.prototype.updateFocus = function() {
	this._sd = false
	if ($gameTemp._bcam_user[2] > 0) {$gameTemp._bcam_user[2] -= 1};
	if ($gameTemp._bcam_target && $gameTemp._bcam_target[0]) {
		if (!$gameSystem.isSideView() && $gameTemp._bcam_target[0].isActor()) {
		  this._cam_X =  this._center[0] + this._battleField.x;
     	  this._cam_Y =  this._center[1] - this._battleField.y;		 
	    } else { 
		  this._cam_X = $gameTemp._bcam_target[1][0];
     	  this._cam_Y = $gameTemp._bcam_target[1][1];
	    };
    } else if (this.isCamUser()) {
		  if (!$gameSystem.isSideView() && $gameTemp._bcam_user[0].isActor()) {
			this.cam_center();
		  } else {
		    this._cam_X = $gameTemp._bcam_user[1][0];
     	    this._cam_Y = $gameTemp._bcam_user[1][1];
		  };
		  	if (TouchInput.isCancelled()) {alert("TEST")}

	} else if (this.isCamTarget()) {
		  this._cam_X = $gameTemp._bcam_target_turn[1][0];
     	  this._cam_Y = $gameTemp._bcam_target_turn[1][1];
	} else if (this.isCamActor()) {
		  this._cam_X = $gameTemp._bcam_actor[1][0];
     	  this._cam_Y = $gameTemp._bcam_actor[1][1];		 
	} else {
		this.cam_center();
	};
};

//==============================
// * Is Cam User
//==============================
Spriteset_Battle.prototype.isCamUser = function() {
	if (!$gameTemp._bcam_user) {return false};
	if (!$gameTemp._bcam_user[0]) {return false};
	if ($gameTemp._bcam_user[2] === 0) {return false};
	if (Imported.MOG_ATB) {
	    if (this._phase != 'start') {return false};
	};
	return true;
};

//==============================
// * Is Cam Target
//==============================
Spriteset_Battle.prototype.isCamTarget = function() {
	if (!$gameTemp._bcam_target_turn) {return false};
	if (!$gameTemp._bcam_target_turn[0]) {return false};
	if (!$gameSystem.isSideView() && $gameTemp._bcam_target_turn[0].isActor()) {return false};
	return true;
};

//==============================
// * Is Cam Actor
//==============================
Spriteset_Battle.prototype.isCamActor = function() {
    if (!$gameSystem.isSideView()) {return false};
	if (!$gameTemp._bcam_actor) {return false};
	if (!$gameTemp._bcam_actor[0]) {return false};
	return true;
};

//==============================
// * Update Battle Camera
//==============================
Spriteset_Battle.prototype.update_battle_camera = function() {
	 this.update_cam_position();
	 var nx = this._center[0] - this._cam_X + this._cam_XF;
	 var ny = this._center[1] - this._cam_Y + this._cam_YF;
     this._battleField.x = Math.floor(this.cam_move_to(this._battleField.x,nx,this.cam_speed(),0));
	 this._battleField.y = Math.floor(this.cam_move_to(this._battleField.y,ny,this.cam_speed(),1));
	 $gameTemp._bcamPos = [this._battleField.x,this._battleField.y];
     if (Imported.MOG_BattlebackEX) {this.update_bbex_cam()};
};

//==============================
// * Update BBex Cam
//==============================
Spriteset_Battle.prototype.update_bbex_cam = function() {
	 if (this._back1Sprite) {
	    this.updateBbCamMode(this._back1Sprite,0);
	    this.updateBbCamMode(this._back2Sprite,1);
	 };
	 for (var i = 2; i < this._bbData.length; i++) {	   
	   this.updateBbCamMode(this._backSpriteEx[i],i);
	 };	 
};

//==============================
// * updateBCamMode
//==============================
Spriteset_Battle.prototype.updateBbCamMode = function(sprite,index) {
	if (this._bbData[index] && this._bbData[index][5]) {
		var rate = this._bbData[index][5]; 
	} else {
		var rate = 0;
	};
	sprite.x = -(this._battleField.x * (rate / 100)) + this._center[0];
	sprite.y = -(this._battleField.y * (rate / 100)) + this._center[1];	
};

//==============================
// * Cam Move To
//==============================
Spriteset_Battle.prototype.cam_move_to = function(value,real_value,speed,type) {
	if (value == real_value) {return value};
	var dnspeed = 5 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	if (type === 0) {return Math.min(Math.max(value,this._cam_limit[0]),this._cam_limit[1]);
	} else {return Math.min(Math.max(value,this._cam_limit[2]),this._cam_limit[3])};
};

//==============================
// * Update
//==============================
var _alias_mog_bcam_sprt_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
	_alias_mog_bcam_sprt_update.call(this); 
    if ($gameSystem._cam_data[0] && this._cam_limit) {this.update_battle_camera()};
};