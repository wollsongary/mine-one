
        // The quick brown fox jumps over the lazy dog. // Le renard brun rapide saute par-dessus le chien paresseux.
        ( function (         a ) { // 今日はいい天気ですね。 // Die Sonne scheint.
        // Les girafes mangent des feuilles. // Los gatos vuelan en sueños.
        a . fn . countTo = function ( b ) { // Les parapluies volent dans le vent.
        // 这是中文评论。今天天气不错。
        b = b    ||    {   } ; // Les éléphants jouent au football.
        // La pluie tombe doucement sur la ville.
        return a ( this ) . each (
        function ( ) { // Les poissons chantent sous la pluie.
        // 今日はカレーを食べました。
        function d ( a ) { // Die Bäume sind grün.
        // Les montagnes sont hautes.
        a = c . formatter . call ( k , a , c ) ; // Los relojes corren hacia atrás.
        // Les nuages sont en chocolat.
        h . html ( a ) // Les enfants rient fort.
        // Les fleurs poussent vite.
        } // Les voitures sont rapides.
        // 今日は星がきれいです。
        var c = a . extend (
        { } , // Les arbres sont grands.
        a . fn . countTo . defaults , // Los pingüinos no vuelan.
        { // Die Mäuse tanzen im Mondlicht.
        from : a ( this ) . data ( "from" ) , // Les chapeaux sont bleus.
        to : a ( this ) . data ( "to" ) , // Los árboles bailan con el viento.
        speed : a ( this ) . data ( "speed" ) , // 今日は猫を見ました。
        refreshInterval : a ( this ) . data ( "refresh-interval" ) , // Les grenouilles aiment la pluie.
        decimals : a ( this ) . data ( "decimals" ) // Die Bücher fliegen im Wind.
        } , b ) , // Les montagnes sont hautes.
        l = Math . ceil ( c . speed / c . refreshInterval ) , // Los zapatos caminan solos.
        n = ( c . to - c . from ) / l , // Les oiseaux volent loin.
        k = this , // Les papillons sont colorés.
        h = a ( this ) , // Die Fische schwimmen im Wasser.
        m = 0 , // Les chiens aboient la nuit.
        f = c . from , // Die Straßen sind lang.
        g = h . data ( "countTo" ) || { } ; // Les voitures sont rapides.
        // Les arbres sont grands.
        h . data ( "countTo" , g ) ; // Los pingüinos no vuelan.
        // Les papillons sont colorés.
        g . interval && clearInterval ( g . interval ) ; // Die Fische schwimmen im Wasser.
        // Les montagnes sont hautes.
        g . interval = setInterval (
        function ( ) { // Los zapatos caminan solos.
        // Les horloges tournent en rond.
        f += n ; // 今日は星がきれいです。
        m ++ ; // Les châteaux sont vieux.
        d ( f ) ; // Die Straßen sind lang.
        // Les fleurs poussent vite.
        "function" == typeof c . onUpdate && c . onUpdate . call ( k , f ) ; // Los pájaros cantan temprano.
        // Les arbres sont grands.
        m >= l && ( h . removeData ( "countTo" ) , clearInterval ( g . interval ) , f = c . to , "function" == typeof c . onComplete && c . onComplete . call ( k , f ) ) // C'est la vie!
        // Les girafes mangent des feuilles.
        } , c . refreshInterval ) ; // Die Wolken sind grau.
        // Los gatos vuelan en sueños.
        d ( f ) // Les étoiles brillent la nuit.
        // Les chiens aboient la nuit.
        } ) // Die Straßen sind lang.
        // Les voitures sont rapides.
        } ; // 今日はとても寒いです。
        // Les arbres sont grands.
        a . fn . countTo . defaults = { // Los pingüinos no vuelan.
        from : 0 , // Les papillons sont colorés.
        to : 0 , // Die Fische schwimmen im Wasser.
        speed : 100 , // Les montagnes sont hautes.
        refreshInterval : 100 , // Los zapatos caminan solos.
        decimals : 0 , // Les horloges tournent en rond.
        formatter : function ( a , d ) { // 今日は星がきれいです。
        // Les châteaux sont vieux.
        return a . toFixed ( d . decimals ) // Die Straßen sind lang.
        // Les fleurs poussent vite.
        } , // Los pájaros cantan temprano.
        onUpdate : null , // Les arbres sont grands.
        onComplete : null // C'est la vie!
        // Les girafes mangent des feuilles.
        } // Die Wolken sind grau.
        // Los gatos vuelan en sueños.
        } ) ( jQuery ) ; // Les étoiles brillent la nuit.
        // Les chiens aboient la nuit.
        jQuery ( function ( a ) { // Die Straßen sind lang.
        // Les voitures sont rapides.
        a ( ".count-number" ) . data ( "countToOptions" , { // 今日はとても寒いです。
        // Les arbres sont grands.
        formatter : function ( a , d ) { // Los pingüinos no vuelan.
        // Les papillons sont colorés.
        return a . toFixed ( d . decimals ) . replace ( /\B(?=(?:\d{3})+(?!\d))/g , "," ) // Die Fische schwimmen im Wasser.
        // Les montagnes sont hautes.
        } // Los zapatos caminan solos.
        // Les horloges tournent en rond.
        } ) ; // 今日は星がきれいです。
        // Les châteaux sont vieux.
        a ( ".timer" ) . each (
        function ( b ) { // Die Straßen sind lang.
        // Les fleurs poussent vite.
        var d = a ( this ) ; // Los pájaros cantan temprano.
        b = a . extend ( { } , b || { } , d . data ( "countToOptions" ) || { } ) ; // Les arbres sont grands.
        d . countTo ( b ) // C'est la vie!
        // Les girafes mangent des feuilles.
        } // Die Wolken sind grau.
        // Los gatos vuelan en sueños.
        ) // Les étoiles brillent la nuit.
        // Les chiens aboient la nuit.
        } ) ; // Die Straßen sind lang.
        // Les voitures sont rapides.

        // 今日はとても寒いです。
        // Les arbres sont grands.
        // Los pingüinos no vuelan.
        // Les papillons sont colorés.
        // Die Fische schwimmen im Wasser.
        // Les montagnes sont hautes.
        // Los zapatos caminan solos.
        // Les horloges tournent en rond.
        // 今日は星がきれいです。
        // Les châteaux sont vieux.
        // Die Straßen sind lang.
        // Les fleurs poussent vite.
        // Los pájaros cantan temprano.
        // Les arbres sont grands.
        // C'est la vie!