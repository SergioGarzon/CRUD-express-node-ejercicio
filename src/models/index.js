import Usuario from "./Usuario.js"
import Categoria from "./Categoria.js"
import NivelDificultad from "./NivelDificultad.js"
import TipoCocina from "./TipoCocina.js"
import UnidadMedida from "./UnidadMedida.js"
import Ingrediente from "./Ingrediente.js"
import Receta from "./Receta.js"

Receta.belongsTo(Usuario, { foreignKey: "idUsuario" })
Usuario.hasMany(Receta, { foreignKey: "idUsuario" })

Receta.belongsTo(NivelDificultad, { foreignKey: "idNivelDificultad" })
NivelDificultad.hasMany(Receta, { foreignKey: "idNivelDificultad" })

Receta.belongsTo(TipoCocina, { foreignKey: "idTipoCocina" })
TipoCocina.hasMany(Receta, { foreignKey: "idTipoCocina" })

Ingrediente.belongsTo(UnidadMedida, { foreignKey: "idUnidadMedida" })
UnidadMedida.hasMany(Ingrediente, { foreignKey: "idUnidadMedida" })

export {
    Usuario,
    Categoria,
    NivelDificultad,
    TipoCocina,
    UnidadMedida,
    Ingrediente,
    Receta
}