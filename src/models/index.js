import Usuario from "./Usuario.js"
import Categoria from "./Categoria.js"
import NivelDificultad from "./NivelDificultad.js"
import TipoCocina from "./TipoCocina.js"
import UnidadMedida from "./UnidadMedida.js"
import Ingrediente from "./Ingrediente.js"
import Receta from "./Receta.js"
import RecetaCategoria from "./RecetaCategoria.js"
import IngredienteRecetaPreparacion from "./IngredienteRecetaPreparacion.js"
import Preparacion from "./Preparacion.js"

Receta.belongsTo(Usuario, { foreignKey: "idUsuario" })
Usuario.hasMany(Receta, { foreignKey: "idUsuario" })

Receta.belongsTo(NivelDificultad, { foreignKey: "idNivelDificultad" })
NivelDificultad.hasMany(Receta, { foreignKey: "idNivelDificultad" })

Receta.belongsTo(TipoCocina, { foreignKey: "idTipoCocina" })
TipoCocina.hasMany(Receta, { foreignKey: "idTipoCocina" })

Ingrediente.belongsTo(UnidadMedida, { foreignKey: "idUnidadMedida" })
UnidadMedida.hasMany(Ingrediente, { foreignKey: "idUnidadMedida" })

RecetaCategoria.belongsTo(Categoria, { foreignKey: "idCategoria" })
Categoria.hasMany(RecetaCategoria, { foreignKey: "idCategoria" })

RecetaCategoria.belongsTo(Receta, { foreignKey: "idReceta" })
Receta.hasMany(RecetaCategoria, { foreignKey: "idReceta" })

IngredienteRecetaPreparacion.belongsTo(Ingrediente, { foreignKey: "idIngrediente" })
Ingrediente.hasMany(IngredienteRecetaPreparacion, { foreignKey: "idIngrediente" })

IngredienteRecetaPreparacion.belongsTo(Receta, { foreignKey: "idReceta" })
Receta.hasMany(IngredienteRecetaPreparacion, { foreignKey: "idReceta" })

IngredienteRecetaPreparacion.belongsTo(Preparacion, { foreignKey: "idPreparacion" })
Preparacion.hasMany(IngredienteRecetaPreparacion, { foreignKey: "idPreparacion" })


export {
    Usuario,
    Categoria,
    NivelDificultad,
    TipoCocina,
    UnidadMedida,
    Ingrediente,
    Receta,
    RecetaCategoria,
    IngredienteRecetaPreparacion,
    Preparacion
}