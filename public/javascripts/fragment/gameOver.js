jade.templates = jade.templates || {};
jade.templates['gameOver'] = (function(){
  return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (setting) {
buf.push("<!--Created by fy on 15-12-28.\n game over 对话框--><div class=\"row\"><div class=\"col-xs-12 col-sm-12\"><div class=\"control-group\"><div class=\"row\"><div class=\"col-sm-2\"><label class=\"control-label bolder blue\">赢家</label></div><div class=\"col-sm-10\"><div class=\"radio\"><label><input id=\"langren\" name=\"whowin\" value=\"langren\" checked=\"checked\" type=\"radio\" class=\"ace\"/><span class=\"lbl\">狼人赢</span></label><label><input id=\"haoren\" name=\"whowin\" value=\"haoren\" type=\"radio\" class=\"ace\"/><span class=\"lbl\">好人赢</span></label></div></div></div></div></div></div><div class=\"row\"><div class=\"col-sm-2\"><label class=\"control-label bolder blue\">得分情况</label></div><div id=\"langrenwin\" class=\"col-sm-10\">狼人得分:<label class=\"inline\"><span class=\"lbl\">" + (jade.escape(null == (jade_interp = setting["score"]["langRen"]) ? "" : jade_interp)) + "</span></label><br/>身份得分:<label class=\"inline\"><span class=\"lbl\">" + (jade.escape(null == (jade_interp = 0) ? "" : jade_interp)) + "</span></label><br/>平民得分:<label class=\"inline\"><span class=\"lbl\">" + (jade.escape(null == (jade_interp = 0) ? "" : jade_interp)) + "</span></label></div><div id=\"haorenwin\" class=\"col-sm-10\">身份得分:<label class=\"inline\"><span class=\"lbl\">" + (jade.escape(null == (jade_interp = setting["score"]["shenFen"]) ? "" : jade_interp)) + "</span></label><br/>平民得分:<label class=\"inline\"><span class=\"lbl\">" + (jade.escape(null == (jade_interp = setting["score"]["pingMin"]) ? "" : jade_interp)) + "</span></label><br/>狼人得分:<label class=\"inline\"><span class=\"lbl\">" + (jade.escape(null == (jade_interp = 0) ? "" : jade_interp)) + "</span></label></div></div><script>$(function () {\n    handleWhoWin();\n    $(\"input[name=whowin]\").click(function () {\n        handleWhoWin();\n    });\n});\nfunction handleWhoWin() {\n    switch ($(\"input[name=whowin]:checked\").attr(\"id\")) {\n        case \"langren\":\n            $(\"#langrenwin\").show();\n            $(\"#haorenwin\").hide();\n            break;\n        case \"haoren\":\n            $(\"#langrenwin\").hide();\n            $(\"#haorenwin\").show();\n            break;\n        default:\n            break;\n    }\n}</script>");}.call(this,"setting" in locals_for_with?locals_for_with.setting:typeof setting!=="undefined"?setting:undefined));;return buf.join("");
};
})();