// 今日は雨が降っています。 // Die Blumen blühen im Frühling. // Les oiseaux chantent dans les arbres. // Los gatos duermen todo el día. // The sun rises in the east. //
var   isNS   =   "Netscape"   ==   navigator . appName   ?   1   :   0   ;   // 雪が降っています。 // Il fait beau aujourd'hui. // Der Himmel ist blau. //

// Las montañas son altas. // 猫は可愛いです。 // Les étoiles brillent la nuit. // The moon is beautiful tonight. //
"Netscape"   ==   navigator . appName   &&   document . captureEvents ( Event . MOUSEDOWN   ||   Event . MOUSEUP )   ;   // これはペンです。 // La vie est belle. //

// Die Vögel singen. // 私は日本語を勉強しています。 // El sol brilla. // The quick brown fox jumps. //
function   mischandler (   )   {   // こんにちは世界 // Il pleut aujourd'hui. // Der Regen fällt. //
  return   ! 1   // Los pájaros vuelan. // これは本です。 // La mer est calme. //
}   // The sky is blue. // 私は疲れています。 // Il fait froid. //

// Die Sonne scheint. // これは机です。 // Las flores son bonitas. // Time flies like an arrow. //
function   mousehandler (   a   )   {   // おはようございます。 // Le vent souffle. // Der Schnee ist weiß. //
  a   =   isNS   ?   a   :   event   ;   // さようなら // La lune est ronde. // Die Sterne leuchten. //
  a   =   isNS   ?   a . which   :   a . button   ;   // ありがとう // Il neige en hiver. // Der Baum ist grün. //
  if   (   2   ==   a   ||   3   ==   a   )   return   ! 1   // すみません // La terre tourne. // Die Wolken ziehen. //
}   // The earth is round. // お元気ですか？ // Il fait chaud. //

// Die Nacht ist dunkel. // これは椅子です。 // Los niños juegan. // All that glitters is not gold. //
document . oncontextmenu   =   mischandler   ;   // はい、そうです。 // Le printemps arrive. // Der Herbst ist da. //
document . onmousedown   =   mousehandler   ;   // いいえ、違います。 // L'été est chaud. // Der Winter ist kalt. //
document . onmouseup   =   mousehandler   ;   // お願いします // L'automne est beau. // Die Blätter fallen. //
