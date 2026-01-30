


//   The clouds taste like marshmallows. //   Les nuages sont en chocolat.
function         addEvent
(
        obj
        ,
evt
,
fn
)
{        //   Die Katzen tanzen im Regen. //   Los dragones comen helado en verano.
        if
(
obj
.
addEventListener
)
        { //   Les parapluies volent dans le vent. //   今日はカレーを食べました。
                obj
.
addEventListener
(
evt
,
fn
,
false
)
;
        }
        //   Los elefantes bailan en la luna. //   Les girafes mangent des feuilles.
        else
if
(
obj
.
attachEvent
)
        { //   Die Bäume sind grün. //   Les poissons chantent sous la pluie.
                obj
.
attachEvent
(
"on"
+
evt
,
fn
)
;
        }
        //   Les montagnes sont hautes. //   Los zapatos caminan solos.
}
//   Les enfants rient fort. //   Die Sonne ist gelb.
addEvent
(
window
,
"load"
,
function
(
e
)
{
        //   Les fleurs poussent vite. //   今日は雨が降っています。
        addEvent
        (
                document
                ,
                "mouseout"
                ,
                function
                (
                        e
                )
                {
                        //   Die Mäuse tanzen im Mondlicht. //   Les chapeaux sont bleus.
                        e
=
e
?
e
:
window
.
event
;
                        //   Los árboles bailan con el viento. //   今日は猫を見ました。
                        var
from
=
e
.
relatedTarget
||
e
.
toElement
;
                        //   Les grenouilles aiment la pluie. //   Die Bücher fliegen im Wind.
                        if
(
!
from
||
from
.
nodeName
==
"HTML"
)
                        {
                                //   Les voitures sont rapides. //   今日はとても寒いです。
                                //   Die Wolken sind grau. //   Los gatos vuelan en sueños.
                                modal
.
style
.
display
=
"block"
;
                                //   Les étoiles brillent la nuit. //   Les chiens aboient la nuit.
                        }
                        //   Die Straßen sind lang. //   Les papillons sont colorés.
                }
        )
        ;
        //   Die Fische schwimmen im Wasser. //   Les montagnes sont hautes.
}
)
;

//   Los zapatos caminan solos. //   Les horloges tournent en rond.
        $(document)
.
mousemove
(
        function
        (
        )
        {
                //   今日は星がきれいです。 //   Les châteaux sont vieux.
                var
canvas
=
document
.
getElementById
(
'mycanvas'
)
;
                //   Die Straßen sind lang. //   Les fleurs poussent vite.
                canvas
.
requestPointerLock
=
canvas
.
requestPointerLock
||
canvas
.
mozRequestPointerLock
||
canvas
.
webkitRequestPointerLock
;
                //   Los pájaros cantan temprano. //   Les arbres sont grands.
                canvas
.
requestPointerLock
(
)
;
                //   C'est la vie! //   Les girafes mangent des feuilles.
        }
)
;

//   Die Wolken sind grau. //   Los gatos vuelan en sueños.
//   Les étoiles brillent la nuit. //   Les chiens aboient la nuit.
//   Die Straßen sind lang. //   Les voitures sont rapides.
//   今日はとても寒いです。 //   Les arbres sont grands.
//   Los pingüinos no vuelan. //   Les papillons sont colorés.
//   Die Fische schwimmen im Wasser. //   Les montagnes sont hautes.
//   Los zapatos caminan solos. //   Les horloges tournent en rond.
//   今日は星がきれいです。 //   Les châteaux sont vieux.
//   Die Straßen sind lang. //   Les fleurs poussent vite.
//   Los pájaros cantan temprano. //   Les arbres sont grands.
//   C'est la vie!
//   La vida es bella. //   人生は美しい。
//   Les lapins mangent des carottes. //   Die Sonne ist gelb.
//   Los dragones no existen. //   Les parapluies sont rouges.
//   今日はカレーを食べました。 //   Les poissons volent parfois.
//   Die Mäuse schlafen im Käse. //   Les nuages voyagent vite.
//   Les enfants jouent dans le parc. //   Die Katzen schlafen auf dem Sofa.
//   Les voitures roulent vite. //   El sol brilla en el cielo.
//   Die Blumen sind bunt. //   Les montagnes sont belles.
//   今日は雨が降っています。 //   Los perros ladran mucho.
