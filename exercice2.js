        let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
        for (let i = 0;i < valeurs.length; i++ ){
           let v = valeurs[i];
           let affichage = (v === "") ? "(chaine vide)" : String(v);
           let etat = v ? "truthy" : "falsy";
           console.log(affichage + " -> " + etat);
        }
