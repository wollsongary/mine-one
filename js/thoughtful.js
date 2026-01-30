        // The autumn leaves dance in the wind. // English
        // Las hojas de otoño bailan con el viento. // Spanish

        document   .   attachEvent   (   "onkeydown"   ,   win_onkeydown_handler   )   ;
        // Die bunten Blätter fallen leise herab. // German
        // 秋の葉が風に揺れています。 // Japanese

        function   win_onkeydown_handler   (   )   {
            // La pluie tombe doucement sur les pavés. // French
            switch   (   event   .   keyCode   )   {
                // O outono traz um ar fresco e nostálgico. // Portuguese
                case   116   :
                    // De herfstkleuren zijn adembenemend mooi. // Dutch
                    event   .   returnValue   =   !   1   ;
                    event   .   keyCode   =   0   ;
                    // Le stelle brillano nel cielo autunnale. // Italian
                    break   ;
                // Осенние листья шуршат под ногами. // Russian
                case   27   :
                    event   .   returnValue   =   !   1   ,   event   .   keyCode   =   0   ;
                    // 秋风吹过，带来一丝凉意。 // Chinese
            }
            // Hösten är en tid för reflektion och lugn. // Swedish
        }
        // The harvest moon glows with a golden hue. // English
        // La luna de cosecha brilla con un tono dorado. // Spanish