//=============================================================================
// MOG_SceneEquip.js
//=============================================================================

/*:
 * @plugindesc (v1.0) 主菜单 - 全自定义装备界面
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-整体布局
 * @desc 整体布局的图片资源。
 * @default 装备界面-整体布局
 * @require 1
 * @dir img/menus_equip/
 * @type file
 *
 * @param 界面字体大小
 * @type number
 * @min 1
 * @desc 装备界面的字体大小。
 * @default 20
 *
 * @param 起点移动时间
 * @type number
 * @min 1
 * @desc 窗口从起点移动到原来位置消耗的时间。单位帧。（1秒60帧）
 * @default 30
 *
 * @param ---帮助窗口---
 * @default 
 *
 * @param 平移-帮助窗口 X
 * @parent ---帮助窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-帮助窗口 Y
 * @parent ---帮助窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 516
 *
 * @param 帮助窗口起点 X
 * @parent ---帮助窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 帮助窗口起点 Y
 * @parent ---帮助窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 资源-帮助窗口
 * @desc 帮助窗口的图片资源。
 * @parent ---帮助窗口---
 * @default 装备界面-帮助窗口
 * @require 1
 * @dir img/menus_equip/
 * @type file
 *
 * @param 平移-帮助窗口布局 X
 * @parent ---帮助窗口---
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-帮助窗口布局 Y
 * @parent ---帮助窗口---
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -67
 *
 * @param ---选项窗口---
 * @default 
 *
 * @param 是否显示选项窗口
 * @parent ---选项窗口---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 装备、最强装备、清除 这三个选项你可以设置去掉，腾出空间。
 * @default true
 *
 * @param 是否显示选项文字
 * @parent ---选项窗口---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 装备、最强装备、清除 文字。
 * @default true
 * 
 * @param 平移-选项窗口 X
 * @parent ---选项窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 312
 *
 * @param 平移-选项窗口 Y
 * @parent ---选项窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 10
 *
 * @param 选项窗口起点 X
 * @parent ---选项窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 选项窗口起点 Y
 * @parent ---选项窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default -100
 *
 * @param 资源-选项窗口
 * @desc 选项窗口的图片资源。
 * @parent ---选项窗口---
 * @default 装备界面-选项窗口
 * @require 1
 * @dir img/menus_equip/
 * @type file
 *
 * @param 平移-选项窗口布局 X
 * @parent ---选项窗口---
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 15
 *
 * @param 平移-选项窗口布局 Y
 * @parent ---选项窗口---
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 11
 *
 * @param ---装备槽---
 * @default 
 * 
 * @param 平移-装备槽 X
 * @parent ---装备槽---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 312
 *
 * @param 平移-装备槽 Y
 * @parent ---装备槽---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 70
 *
 * @param 装备槽起点 X
 * @parent ---装备槽---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 装备槽起点 Y
 * @parent ---装备槽---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 装备槽宽度
 * @parent ---装备槽---
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的宽度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 510
 *
 * @param 装备槽高度
 * @parent ---装备槽---
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的高度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 230
 *
 * @param 是否显示装备槽名
 * @parent ---装备槽---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-装备槽
 * @desc 装备槽的图片资源。
 * @parent ---装备槽---
 * @default 装备界面-装备槽
 * @require 1
 * @dir img/menus_equip/
 * @type file
 *
 * @param 平移-装备槽布局 X
 * @parent ---装备槽---
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 22
 *
 * @param 平移-装备槽布局 Y
 * @parent ---装备槽---
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 8
 *
 * @param ---装备列表---
 * @default 
 * 
 * @param 平移-装备列表 X
 * @parent ---装备列表---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 305
 *
 * @param 平移-装备列表 Y
 * @parent ---装备列表---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 280
 *
 * @param 装备列表起点 X
 * @parent ---装备列表---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 装备列表起点 Y
 * @parent ---装备列表---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 装备列表列数
 * @parent ---装备列表---
 * @type number
 * @min 1
 * @desc 装备列表的列数。
 * @default 1
 *
 * @param 装备列表宽度
 * @parent ---装备列表---
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的宽度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 510
 *
 * @param 装备列表高度
 * @parent ---装备列表---
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的高度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 230
 *
 * @param 资源-装备列表
 * @desc 装备列表的图片资源。
 * @parent ---装备列表---
 * @default 装备界面-装备列表
 * @require 1
 * @dir img/menus_equip/
 * @type file
 *
 * @param 平移-装备列表布局 X
 * @parent ---装备列表---
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-装备列表布局 Y
 * @parent ---装备列表---
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 * 
 *
 * @param ---角色窗口---
 * @default 
 * 
 * @param 平移-角色窗口 X
 * @parent ---角色窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 10
 *
 * @param 平移-角色窗口 Y
 * @parent ---角色窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 120
 *
 * @param 角色窗口起点 X
 * @parent ---角色窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色窗口起点 Y
 * @parent ---角色窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default -100
 *
 * @param 资源-能力情况图标
 * @desc 能力情况的图片资源。
 * @parent ---角色窗口---
 * @default 装备界面-能力情况图标
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 是否显示角色能力值名
 * @parent ---角色窗口---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 攻击、防御等能力值的名字。
 * @default false
 *
 * @param 资源-角色窗口
 * @desc 角色窗口的图片资源。
 * @parent ---角色窗口---
 * @default 装备界面-角色窗口
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 平移-角色窗口布局 X
 * @parent ---角色窗口---
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-角色窗口布局 Y
 * @parent ---角色窗口---
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-角色名 X
 * @parent ---角色窗口---
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 20
 *
 * @param 平移-角色名 Y
 * @parent ---角色窗口---
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 20
 *
 * @param 平移-角色头像 X
 * @parent ---角色窗口---
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 140
 *
 * @param 平移-角色头像 Y
 * @parent ---角色窗口---
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -10
 * 		
 * @param ---角色头像 1至20---
 * @parent ---角色窗口---
 * @default 
 *
 * @param 角色头像-1
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-2
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-3
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-4
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-5
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-6
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-7
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-8
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-9
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-10
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-11
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-12
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-13
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-14
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-15
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-16
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-17
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-18
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-19
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-20
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 * 
 * @param ---角色头像21至40---
 * @parent ---角色窗口---
 * @default 
 *
 * @param 角色头像-21
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-22
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-23
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-24
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-25
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-26
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-27
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-28
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-29
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-30
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-31
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-32
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-33
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-34
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-35
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-36
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-37
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-38
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-39
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-40
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 * 
 * @param ---角色头像41至60---
 * @parent ---角色窗口---
 * @default 
 *
 * @param 角色头像-41
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-42
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-43
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-44
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-45
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-46
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-47
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-48
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-49
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-50
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-51
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-52
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-53
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-54
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-55
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-56
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-57
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-58
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-59
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @param 角色头像-60
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/menus_actorwindow/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG - Scene Equip (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 可完全自己定义的装备界面设置。
 * 配置分为四个部分，选项窗口、装备槽与列表、角色窗口、杂项数据。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有menus_equip文件夹！     (img/menus_equip)
 * 先确保项目img文件夹下是否有menus_actorwindow文件夹!(img/menus_actorwindow)
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-整体布局      (menus_equip文件夹)
 * 资源-帮助窗口      (menus_equip文件夹)
 * 资源-选项窗口      (menus_equip文件夹)
 * 资源-装备槽        (menus_equip文件夹)
 * 资源-装备列表      (menus_equip文件夹)
 *
 * 资源-角色窗口      (menus_actorwindow文件夹)
 * 资源-能力情况图标  (menus_actorwindow文件夹)
 *
 * 角色头像-1 （menus_actorwindow文件夹，头像1与编号为1的角色对应。）
 * 角色头像-2
 * 角色头像-3
 * ………
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * 大幅度修改了选项窗口内部函数，为了使得选项窗口可以被去掉。
 * 大幅度修改了其它窗口的数值。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SceneEquip = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SceneEquip');  
    Moghunter.scEquip_FontSize = Number(Moghunter.parameters['界面字体大小'] || 20);
    Moghunter.scEquip_MovingTime = Number(Moghunter.parameters['起点移动时间'] || 30);
	Moghunter.scEquip_HelpWindowX = Number(Moghunter.parameters['平移-帮助窗口 X'] || 0);
	Moghunter.scEquip_HelpWindowY = Number(Moghunter.parameters['平移-帮助窗口 Y'] || 516);	
	Moghunter.scEquip_HelpWindow_slideX = Number(Moghunter.parameters['帮助窗口起点 X'] || 0);
	Moghunter.scEquip_HelpWindow_slideY = Number(Moghunter.parameters['帮助窗口起点 Y'] || 100);	
	Moghunter.scEquip_HelpLayoutX = Number(Moghunter.parameters['平移-帮助窗口布局 X'] || 0);
	Moghunter.scEquip_HelpLayoutY = Number(Moghunter.parameters['平移-帮助窗口布局 Y'] || -67);		
	
	Moghunter.scEquip_ComWindow_visible = String(Moghunter.parameters['是否显示选项窗口'] || "true") === "true";
	Moghunter.scEquip_ComWindow_text_visible = String(Moghunter.parameters['是否显示选项文字'] || "true") === "true";
	Moghunter.scEquip_ComWindowX = Number(Moghunter.parameters['平移-选项窗口 X'] || 312);
	Moghunter.scEquip_ComWindowY = Number(Moghunter.parameters['平移-选项窗口 Y'] || 10);	
	Moghunter.scEquip_ComWindow_slideX = Number(Moghunter.parameters['选项窗口起点 X'] || 0);
	Moghunter.scEquip_ComWindow_slideY = Number(Moghunter.parameters['选项窗口起点 Y'] || -100);	
	Moghunter.scEquip_ComLayoutX = Number(Moghunter.parameters['平移-选项窗口布局 X'] || 15);
	Moghunter.scEquip_ComLayoutY = Number(Moghunter.parameters['平移-选项窗口布局 Y'] || 11);		
	
	Moghunter.scEquip_Slot_Name_visible = String(Moghunter.parameters['是否显示装备槽名'] || "true") === "true";
	Moghunter.scEquip_SlotWindowX = Number(Moghunter.parameters['平移-装备槽 X'] || 312);
	Moghunter.scEquip_SlotWindowY = Number(Moghunter.parameters['平移-装备槽 Y'] || 70);	
	Moghunter.scEquip_SlotWindow_slideX = Number(Moghunter.parameters['装备槽起点 X'] || 100);
	Moghunter.scEquip_SlotWindow_slideY = Number(Moghunter.parameters['装备槽起点 Y'] || 0);	
	Moghunter.scEquip_SlotLayoutX = Number(Moghunter.parameters['平移-装备槽布局 X'] || 22);
	Moghunter.scEquip_SlotLayoutY = Number(Moghunter.parameters['平移-装备槽布局 Y'] || 8);	
	Moghunter.scEquip_SlotWindow_width = Number(Moghunter.parameters['装备槽宽度'] || 510);
	Moghunter.scEquip_SlotWindow_height = Number(Moghunter.parameters['装备槽高度'] || 230);	
	
	Moghunter.scEquip_ItemWindowX = Number(Moghunter.parameters['平移-装备列表 X'] || 305);
	Moghunter.scEquip_ItemWindowY = Number(Moghunter.parameters['平移-装备列表 Y'] || 280);
	Moghunter.scEquip_ItemWindow_slideX = Number(Moghunter.parameters['装备列表起点 X'] || 100);
	Moghunter.scEquip_ItemWindow_slideY = Number(Moghunter.parameters['装备列表起点 Y'] || 0);
	Moghunter.scEquip_ItemWindow_col = Number(Moghunter.parameters['装备列表列数'] || 1);
	Moghunter.scEquip_ItemWindow_width = Number(Moghunter.parameters['装备列表宽度'] || 510);
	Moghunter.scEquip_ItemWindow_height = Number(Moghunter.parameters['装备列表高度'] || 230);
	Moghunter.scEquip_ItemLayoutX = Number(Moghunter.parameters['平移-装备列表布局 X'] || 0);
	Moghunter.scEquip_ItemLayoutY = Number(Moghunter.parameters['平移-装备列表布局 Y'] || 0);	
	
	Moghunter.scEquip_Status_param_name_visible = String(Moghunter.parameters['是否显示角色能力值名'] || "true") === "true";
	Moghunter.scEquip_StatusWindowX= Number(Moghunter.parameters['平移-角色窗口 X'] || 10);
	Moghunter.scEquip_StatusWindowY = Number(Moghunter.parameters['平移-角色窗口 Y'] || 120);
	Moghunter.scEquip_StatusWindow_slideX= Number(Moghunter.parameters['角色窗口起点 X'] || 0);
	Moghunter.scEquip_StatusWindow_slideY = Number(Moghunter.parameters['角色窗口起点 Y'] || -100);
	Moghunter.scEquip_StatusLayoutX = Number(Moghunter.parameters['平移-角色窗口布局 X'] || 0);
	Moghunter.scEquip_StatusLayoutY = Number(Moghunter.parameters['平移-角色窗口布局 Y'] || 0);
	Moghunter.scEquip_ActorName_X = Number(Moghunter.parameters['平移-角色名 X'] || 20);
	Moghunter.scEquip_ActorName_Y = Number(Moghunter.parameters['平移-角色名 Y'] || 20);	
	Moghunter.scEquip_Face_X = Number(Moghunter.parameters['平移-角色头像 X'] || 140);
	Moghunter.scEquip_Face_Y = Number(Moghunter.parameters['平移-角色头像 Y'] || -10);	
		
	Moghunter.src_menu_equip_layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_menu_equip_help = String(Moghunter.parameters['资源-帮助窗口']);
	Moghunter.src_menu_equip_option = String(Moghunter.parameters['资源-选项窗口']);
	Moghunter.src_menu_equip_slot = String(Moghunter.parameters['资源-装备槽']);
	Moghunter.src_menu_equip_list = String(Moghunter.parameters['资源-装备列表']);
	Moghunter.src_menu_equip_actor = String(Moghunter.parameters['资源-角色窗口']);
	Moghunter.src_menu_equip_param = String(Moghunter.parameters['资源-能力情况图标']);
		
		
	Moghunter.menu_equip_face_list_length = 60;
	Moghunter.menu_equip_face_list = {};
	for (Moghunter.i = 1; Moghunter.i <= Moghunter.menu_equip_face_list_length ; ++Moghunter.i) {
	  Moghunter.line = "String(Moghunter.parameters['角色头像-" + Moghunter.i + "'] )";
	  Moghunter.menu_equip_face_list[Moghunter.i] = eval(Moghunter.line);
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Equip
//==============================
ImageManager.loadMenusequip = function(filename) {
    return this.loadBitmap('img/menus_equip/', filename, 0, true);
};

ImageManager.loadMenusActor = function(filename) {
    return this.loadBitmap('img/menus_actorwindow/', filename, 0, true);
};

//=============================================================================
// ** Scene Equip
//=============================================================================

//==============================
// * create Background
//==============================
var _mog_scEquip_createBackground = Scene_Equip.prototype.createBackground;
Scene_Equip.prototype.createBackground = function() {
	_mog_scEquip_createBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
};

//==============================
// * Create
//==============================
var _mog_scEquipM_create = Scene_Equip.prototype.create;
Scene_Equip.prototype.create = function() {
	_mog_scEquipM_create.call(this);
	this._helpWindow.x = Moghunter.scEquip_HelpWindowX;
	this._helpWindow.y = Moghunter.scEquip_HelpWindowY;	
	this._helpWindowOrg = [this._helpWindow.x,this._helpWindow.y];
	this._commandWindow.x = Moghunter.scEquip_ComWindowX;
	this._commandWindow.y = Moghunter.scEquip_ComWindowY;
	this._commandWindow.contents.fontSize = Moghunter.scEquip_FontSize;	
	this._commandWindowOrg = [this._commandWindow.x,this._commandWindow.y];
    this._slotWindow.x = Moghunter.scEquip_SlotWindowX;
	this._slotWindow.y = Moghunter.scEquip_SlotWindowY;
	this._slotWindow.width = Moghunter.scEquip_SlotWindow_width;
	this._slotWindow.height = Moghunter.scEquip_SlotWindow_height;
	this._slotWindowOrg = [this._slotWindow.x,this._slotWindow.y];
	this._itemWindow.x = Moghunter.scEquip_ItemWindowX;
	this._itemWindow.y = Moghunter.scEquip_ItemWindowY;
	this._itemWindow.width = Moghunter.scEquip_ItemWindow_width;
	this._itemWindow.height = Moghunter.scEquip_ItemWindow_height;
	this._itemWindowOrg = [this._itemWindow.x,this._itemWindow.y];
	this._statusWindow.x = Moghunter.scEquip_StatusWindowX;
	this._statusWindow.y = Moghunter.scEquip_StatusWindowY;
	this._statusWindowOrg = [this._statusWindow.x,this._statusWindow.y];
	this.createSprites();
	this.resetPosition();
};

//==============================
// * createSlotWindow
//==============================
var _mog_scsEquipM_createSlotWindow = Scene_Equip.prototype.createSlotWindow;//念のためバックアップ
Scene_Equip.prototype.createSlotWindow = function() {
	if( !Moghunter.scEquip_ComWindow_visible ){
		var wx = this._statusWindow.width;
		var wy = this._helpWindow.height;
		var ww = Graphics.boxWidth - this._statusWindow.width;
		var wh = this._statusWindow.height;
		this._slotWindow = new Window_EquipSlot(wx, wy, ww, wh);
		this._slotWindow.setHelpWindow(this._helpWindow);
		this._slotWindow.setStatusWindow(this._statusWindow);
		this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
		//this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
		this._slotWindow.setHandler('cancel',   this.popScene.bind(this));
		this._slotWindow.setHandler('pagedown', this.nextActor.bind(this));
		this._slotWindow.setHandler('pageup',   this.previousActor.bind(this));
		this.addWindow(this._slotWindow);
		this._slotWindow.activate();
		this._slotWindow.select(0);//修改 选项窗口的绑定事件 到 装备列表中
	}else{
		_mog_scsEquipM_createSlotWindow.call(this);
	}
};

//==============================
// * On Actor Change
//==============================
var _mog_scsEquipM_onActorChange = Scene_Equip.prototype.onActorChange;
Scene_Equip.prototype.onActorChange = function() {
	if( !Moghunter.scEquip_ComWindow_visible ){
		this.refreshActor();
		//this._commandWindow.activate();
		this._slotWindow.activate();
		this._slotWindow.select(0);
	}else{
		_mog_scsEquipM_onActorChange.call(this);
	}
	this.resetPosition();
	this.update();
};

//==============================
// * Create CommandWindow
//==============================
var _mog_scsEquipM_createCommandWindow = Scene_Equip.prototype.createCommandWindow;
Scene_Equip.prototype.createCommandWindow = function() {
	if( !Moghunter.scEquip_ComWindow_visible ){
		var wx = this._statusWindow.width;
		var wy = this._helpWindow.height;
		var ww = Graphics.boxWidth - this._statusWindow.width;
		this._commandWindow = new Window_EquipCommand(wx, wy, ww);
		this._commandWindow.setHelpWindow(this._helpWindow);
	}else{
		_mog_scsEquipM_createCommandWindow.call(this);
	}
};


//==============================
// * Create Sprites
//==============================
Scene_Equip.prototype.createSprites = function() {
	this.createLayout();
	this.createLayoutHelp();
	this.createLayoutCommand();
	this.createLayoutSlot();
	this.createLayoutItem();
	this.createLayoutStatus();
};

//==============================
// * Create Layout
//==============================
Scene_Equip.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_layout));
	this._field.addChild(this._layout);	
};

//==============================
// * Create LayoutHelp
//==============================
Scene_Equip.prototype.createLayoutHelp = function() {
	this._layoutHelp = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_help));
	this._field.addChild(this._layoutHelp);	
};

//==============================
// * Create LayoutCommand
//==============================
Scene_Equip.prototype.createLayoutCommand = function() {
	this._layoutCommand = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_option));
	this._field.addChild(this._layoutCommand);	
};

//==============================
// * Create LayoutSlot
//==============================
Scene_Equip.prototype.createLayoutSlot = function() {
	this._layoutSlot = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_slot));
	this._field.addChild(this._layoutSlot);	
};

//==============================
// * Create LayoutItem
//==============================
Scene_Equip.prototype.createLayoutItem = function() {
	this._layoutItem = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_list));
	this._field.addChild(this._layoutItem);	
};

//==============================
// * Create LayoutStatus
//==============================
Scene_Equip.prototype.createLayoutStatus = function() {
	this._layoutStatus = new Sprite(ImageManager.loadMenusActor(Moghunter.src_menu_equip_actor));
	this._field.addChild(this._layoutStatus);	
};

//==============================
// * update Sprites
//==============================
Scene_Equip.prototype.updateSprites = function() {
	 this.updateSlide();
     this.updateLayout()	
};

//==============================
// * reset Position
//==============================
Scene_Equip.prototype.resetPosition = function() {
	this._helpWindow.x = this._helpWindowOrg[0] + Moghunter.scEquip_HelpWindow_slideX;
	this._helpWindow.y = this._helpWindowOrg[1] + Moghunter.scEquip_HelpWindow_slideY;
	this._commandWindow.x = this._commandWindowOrg[0] + Moghunter.scEquip_ComWindow_slideX;
	this._commandWindow.y = this._commandWindowOrg[1] + Moghunter.scEquip_ComWindow_slideY;
	this._slotWindow.x = this._slotWindowOrg[0] + Moghunter.scEquip_SlotWindow_slideX;
	this._slotWindow.y = this._slotWindowOrg[1] + Moghunter.scEquip_SlotWindow_slideY;
	this._itemWindow.x = this._itemWindowOrg[0] + Moghunter.scEquip_ItemWindow_slideX;
	this._itemWindow.y = this._itemWindowOrg[1] + Moghunter.scEquip_ItemWindow_slideY;
	this._statusWindow.x = this._statusWindowOrg[0] + Moghunter.scEquip_StatusWindow_slideX;
	this._statusWindow.y = this._statusWindowOrg[1] + Moghunter.scEquip_StatusWindow_slideY;

	this._helpWindow.contentsOpacity = 0;
	this._commandWindow.contentsOpacity = 0;
	this._slotWindow.contentsOpacity = 0;
	this._itemWindow.contentsOpacity = 0;
	this._statusWindow.contentsOpacity = 0;
	
	this._moving = 0;
};

//==============================
// * update Slide
//==============================
Scene_Equip.prototype.updateSlide = function() {
	
	this._moving += 1;
	if( this._moving <= Moghunter.scEquip_MovingTime ){
		this._helpWindow.contentsOpacity += ( 256 / Moghunter.scEquip_MovingTime);
		if( Moghunter.scEquip_ComWindow_visible ){
			this._commandWindow.contentsOpacity += ( 256 / Moghunter.scEquip_MovingTime);
		}
		this._slotWindow.contentsOpacity += ( 256 / Moghunter.scEquip_MovingTime);
		this._itemWindow.contentsOpacity += ( 256 / Moghunter.scEquip_MovingTime);
		this._statusWindow.contentsOpacity += ( 256 / Moghunter.scEquip_MovingTime);
	
		this._helpWindow.x -= (Moghunter.scEquip_HelpWindow_slideX / Moghunter.scEquip_MovingTime);
		this._helpWindow.y -= (Moghunter.scEquip_HelpWindow_slideY / Moghunter.scEquip_MovingTime);
		this._commandWindow.x -= (Moghunter.scEquip_ComWindow_slideX / Moghunter.scEquip_MovingTime);
		this._commandWindow.y -= (Moghunter.scEquip_ComWindow_slideY / Moghunter.scEquip_MovingTime);
		this._slotWindow.x -= (Moghunter.scEquip_SlotWindow_slideX / Moghunter.scEquip_MovingTime);
		this._slotWindow.y -= (Moghunter.scEquip_SlotWindow_slideY / Moghunter.scEquip_MovingTime);
		this._itemWindow.x -= (Moghunter.scEquip_ItemWindow_slideX / Moghunter.scEquip_MovingTime);
		this._itemWindow.y -= (Moghunter.scEquip_ItemWindow_slideY / Moghunter.scEquip_MovingTime);
		this._statusWindow.x -= (Moghunter.scEquip_StatusWindow_slideX / Moghunter.scEquip_MovingTime);
		this._statusWindow.y -= (Moghunter.scEquip_StatusWindow_slideY / Moghunter.scEquip_MovingTime);
	}
};

//==============================
// * update Layout
//==============================
Scene_Equip.prototype.updateLayout = function() {
	this._layoutHelp.x = this._helpWindow.x + Moghunter.scEquip_HelpLayoutX;
	this._layoutHelp.y = this._helpWindow.y + Moghunter.scEquip_HelpLayoutY;
	this._layoutHelp.opacity = this._helpWindow.contentsOpacity
	this._helpWindow.opacity = 0;	
	this._layoutCommand.x = this._commandWindow.x + Moghunter.scEquip_ComLayoutX;
	this._layoutCommand.y = this._commandWindow.y + Moghunter.scEquip_ComLayoutY;
	this._layoutCommand.opacity = this._commandWindow.contentsOpacity;
    this._commandWindow.opacity = 0;	
	this._layoutSlot.x = this._slotWindow.x + Moghunter.scEquip_SlotLayoutX;
	this._layoutSlot.y = this._slotWindow.y + Moghunter.scEquip_SlotLayoutY;
	this._layoutSlot.opacity = this._slotWindow.contentsOpacity;
    this._slotWindow.opacity = 0;		
	this._layoutItem.x = this._itemWindow.x + Moghunter.scEquip_ItemLayoutX;
	this._layoutItem.y = this._itemWindow.y + Moghunter.scEquip_ItemLayoutY;
	this._layoutItem.opacity = this._itemWindow.contentsOpacity;
    this._itemWindow.opacity = 0;	
	this._layoutStatus.x = this._statusWindow.x + Moghunter.scEquip_StatusLayoutX;
	this._layoutStatus.y = this._statusWindow.y + Moghunter.scEquip_StatusLayoutY;
	this._layoutStatus.opacity = this._statusWindow.contentsOpacity;
    this._statusWindow.opacity = 0;	
};

//==============================
// * Update
//==============================
var _mog_scEquipM_update = Scene_Equip.prototype.update;
Scene_Equip.prototype.update = function() {
	_mog_scEquipM_update.call(this);
    if (this._layout) {this.updateSprites()};
};

//=============================================================================
// ** Window Equip Slot
//=============================================================================

//==============================
// * Window Equip Item
//==============================
Window_EquipSlot.prototype.drawItem = function(index) {
	this.contents.fontSize = Moghunter.scEquip_FontSize;
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
		if( Moghunter.scEquip_Slot_Name_visible ){
            this.drawText(this.slotName(index), rect.x, rect.y, 138, this.lineHeight());
		}
        this.drawItemName(this._actor.equips()[index], rect.x + 138, rect.y);
        this.changePaintOpacity(true);
    }
};

//=============================================================================
// ** Window Equip Command
//=============================================================================

//==============================
// * draw Text
//==============================
var _mog_scEquipCom_drawText = Window_EquipCommand.prototype.drawText;
Window_EquipCommand.prototype.drawText = function(text, x, y, maxWidth, align) {
	if( Moghunter.scEquip_ComWindow_text_visible ){
		_mog_scEquipCom_drawText.call(this,text, x, y, maxWidth, align);
	}
};

//=============================================================================
// ** Window Equip Status
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_scequip_westatus_initialize = Window_EquipStatus.prototype.initialize;
Window_EquipStatus.prototype.initialize = function(x, y) {
    _mog_scequip_westatus_initialize.call(this,x,y);
	this._parImg = ImageManager.loadMenusActor(Moghunter.src_menu_equip_param);
	this._parData = [0,0];
};

//==============================
// * draw Text
//==============================
Window_EquipStatus.prototype.createFaceSprite = function() {
	this._faceSprite = new Sprite();
	this._faceSprite.x = Moghunter.scEquip_Face_X;
	this._faceSprite.y = Moghunter.scEquip_Face_Y;
	this.addChild(this._faceSprite);
};

//==============================
// * refresh
//==============================
Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
	this.contents.fontSize = Moghunter.scEquip_FontSize;
    if (this._actor) {
		this._parData[0] = this._parImg.width / 3;
		this._parData[1] = this._parImg.height;
    	if (!this._faceSprite) {this.createFaceSprite()};
		this.refreshFaceSprite();
        this.drawActorName(this._actor, Moghunter.scEquip_ActorName_X, Moghunter.scEquip_ActorName_Y );
        for (var i = 0; i < 6; i++) {
            this.drawItem(0, 53 +  this.lineHeight() * (1 + i), 2 + i);
        }
    }
};

//==============================
// * refresh Face Sprite
//==============================
Window_EquipStatus.prototype.refreshFaceSprite = function() {
	 this._faceSprite.bitmap = ImageManager.loadMenusActor(Moghunter.menu_equip_face_list[this._actor._actorId]);
};

//==============================
// * window Height
//==============================
Window_EquipStatus.prototype.windowHeight = function() {
    return 350;
};

//==============================
// * draw Par Name
//==============================
var _mog_scEquipStatus_drawParamName = Window_EquipStatus.prototype.drawParamName;
Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
	if( Moghunter.scEquip_Status_param_name_visible ){
		_mog_scEquipStatus_drawParamName.call(this,x,y,paramId);
	}
};

//==============================
// * draw Right Arrow
//==============================
Window_EquipStatus.prototype.drawRightArrowM = function(x, y,paramId) {

    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId); 
    if (diffvalue > 0) {
		 var sx = this._parData[0];
	} else if (diffvalue < 0) {
		var sx = this._parData[0] * 2;
	} else {
	    var sx = 0	
	};		
    this.contents.blt(this._parImg, sx, 0, this._parData[0], this._parData[1], x, y);	
	 
};

//==============================
// * draw Item
//==============================
Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
    this.drawParamName(x + this.textPadding(), y, paramId);
    if (this._actor) {
        this.drawCurrentParam(x + 120, y, paramId);
		if (this._tempActor) {this.drawRightArrowM(x + 188, y + 6,paramId)};
    }
    if (this._tempActor) {
        this.drawNewParam(x + 202, y, paramId);
    }
};

//==============================
// * update
//==============================
var _mog_scnEquipUpdate = Window_EquipStatus.prototype.update;
Window_EquipStatus.prototype.update = function() {
    _mog_scnEquipUpdate.call(this);
	this._faceSprite.opacity = this.contentsOpacity;
};

//=============================================================================
// ** Window Equip Item
//=============================================================================

//==============================
// * Window Equip Item
//==============================
var _mog_scEquip_Wequip_drawItemName = Window_EquipItem.prototype.drawItemName;
Window_EquipItem.prototype.drawItemName = function(item, x, y, width) {
	this.contents.fontSize = Moghunter.scEquip_FontSize;
    _mog_scEquip_Wequip_drawItemName.call(this,item, x, y, width)
};

//==============================
// * max Cols
//==============================
Window_EquipItem.prototype.maxCols = function() {
    return Moghunter.scEquip_ItemWindow_col;
};

