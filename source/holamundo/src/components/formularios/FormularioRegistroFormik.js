// TODO:
/**
 * ? - Tipo función
 * ? - FORMIK Y YUP
 * ? - Campos:
 * ? *> NOMBRE -> máximo 15 caracteres, obligatorio (asterisco rojo que lo muestre en el label)
 * ? *> APELLIDOS -> máximo 20 caracteres, opcional 
 * ? *> EMAIL -> email, obligatorio (asterisco rojo que lo muestre en el label)
 * ? *> (OPCIONAL) -> País -> seleccionable obligatorio y debe ser una opción entre España, Portugal y Francia
 * ? *> CONTRASEÑA -> contraseña, tener letras, una mayúscula, al menos un número y un símbolo de puntuación y es obligatoria
 * ? *> (OPCIONAL) -> REPETIR CONTRASEÑA -> debe ser la misma que la contraseña original
 * 
 * ? --- AL HACE SUBMIT DEBE MOSTRARSE EL FORMULARIO, MENOS LA CONTRASEÑA REPETIDA
 * ? --- TAMBIÉN SE DEBE PODER RESETEAR LOS CAMPOS
 */

import React from 'react';
// Hacer uso de FORMIK que no es más que un wrapper - gestor de formularios reactivos
import { Formik } from 'formik';
// Hacer uso de YUP para validar nuestros formularios
import * as Yup from 'yup';
// Añadimos los estilos para el formulario:
import '../../styles/Formik.css';

const FormularioRegistroFormik = () => {
    return (
        <Formik

            //******* DECLARAMOS LOS VALORES INICIALES DEL FORMAULARIO ***** */
            initialValues = {
                { 
                    nombre: '',
                    apellidos: '',
                    pais: '',
                    email: '',
                    password: ''
                }
            }

            //******* DECLARAMOS LA FUNCIÓN QUE SE DEBE EJECUTAR EN EL ONSUBMIT DEL FORMAULARIO ***** */
            onSubmit = {
                (values, { setSubmitting }) => {
                    // Realizaríamos la llamada a la petición HTTP para hacer el login
                    // De momento lo vamos a simular con una espera de 5 segundos
                    setTimeout(() => {
                        console.log('ENVIANDO...');
                        console.table(values); // imprimos los valores del formulario
                        setSubmitting(false);
                    }, 5000);
                }
            }

            // ****** VALIDACIÓN DE CAMPOS A TRAVÉS DE YUP ********
            // Creamos un esquema del aspecto que tendrá el objeto formulario y sus campos
            // además de las validaciones que se requieran
            validationSchema = {
                Yup.object().shape(
                    {
                        nombre: Yup.string()
                            .max(15, 'El nombre debe contener como máximo 15 caracteres')
                            .required('El nombre es obligatorio'),
                        apellidos: Yup.string()
                            .max(20, 'El nombre debe contener como máximo 20 caracteres'),
                        pais: Yup.string().required('El país es obligatorio'),
                        email: Yup.string()
                            .email('El email no es válido')
                            .required('El campo email es obligatorio'),
                        password: Yup.string()
                            .required('La contraseña es obligatoria')
                            .min(7, 'Como mínimo la contraseña ha de tener 7 caracteres')
                            // matches -> Expresiones regulares
                    }
                )
            }
        >
            {/* ****** PASAMOS PROPS al FORMULARIO QUE VAMOS A PINTAR
            
            - values: valores del formulario
            - touched: nos dice si un campo ha sido tocado por el usuario o no
            - errors: nos lista los errores del formulario
            - isSubmitting: nos dice si se está ejecutando el Submit del formulario
            - handleChange: manejar cambios en los campos del formulario
            - handleBlur: manejar cuando se pierde el foco de un campo
            - handleSubmit: manejador para ejecutar la función de onSubmit de Formik */}
            
            { props => {

                const { values, touched, errors, isSubmitting, handleChange, handleSubmit, handleBlur, resetForm } = props;
                
                return (
                    <form onSubmit = { handleSubmit }>
                        {/* NOMBRE DEL USUARIO */}
                        <label htmlFor='nombre'>Nombre</label>
                        <input 
                            name='nombre'
                            type='text'
                            placeholder='nombre'
                            value= {values.nombre}
                            onChange= { handleChange }
                            onBlur = { handleBlur }
                            className = { errors.nombre && touched.nombre && 'error'}
                        />
                        {/* Mostramos los errores relacionados con el nombre */}
                        { errors.nombre && touched.nombre && (
                            <div className='input-error'>
                                {/* Errores que hemos personalizado en YUP */}
                                {errors.nombre}
                            </div>
                        )}
                        {/* APELLIDOS DEL USUARIO */}
                        <label htmlFor='apellidos'>Email</label>
                        <input 
                            name='apellidos'
                            type='text'
                            placeholder='apellidos'
                            value= {values.apellidos}
                            onChange= { handleChange }
                            onBlur = { handleBlur }
                            className = { errors.apellidos && touched.apellidos && 'error'}
                        />
                        {/* Mostramos los errores relacionados con el apellidos */}
                        { errors.apellidos && touched.apellidos && (
                            <div className='input-error'>
                                {/* Errores que hemos personalizado en YUP */}
                                {errors.apellidos}
                            </div>
                        )}
                        {/* PAÍS DEL USUARIO */}
                        <label htmlFor='pais'>País</label>
                        <select
                            name= 'pais'
                            value= {values.pais}
                            onChange= { handleChange }
                            onBlur = { handleBlur }
                            className = { errors.pais && touched.pais && 'error'}
                        >
                            <option value='España'>España</option>
                            <option value='Portugal'>Portugal</option>
                            <option value='Francia'>Francia</option>
                        </select>
                        {/* Mostramos los errores relacionados con el pais */}
                        { errors.pais && touched.pais && (
                            <div className='input-error'>
                                {/* Errores que hemos personalizado en YUP */}
                                {errors.pais}
                            </div>
                        )}
                        {/* EMAIL DEL USUARIO */}
                        <label htmlFor='email'>Email</label>
                        <input 
                            name='email'
                            type='text'
                            placeholder='Email de usuario'
                            value= {values.email}
                            onChange= { handleChange }
                            onBlur = { handleBlur }
                            className = { errors.email && touched.email && 'error'}
                        />
                        {/* Mostramos los errores relacionados con el email */}
                        { errors.email && touched.email && (
                            <div className='input-error'>
                                {/* Errores que hemos personalizado en YUP */}
                                {errors.email}
                            </div>
                        )}
                        {/* CONTRASEÑA */}
                        <label htmlFor='password'>Contraseña</label>
                        <input 
                            name='password'
                            type='password'
                            placeholder='Contraseña'
                            value= {values.password}
                            onChange= { handleChange }
                            onBlur = { handleBlur }
                            className = { errors.password && touched.password && 'error'}
                        />
                        {/* Mostramos los errores relacionados con el password */}
                        { errors.password && touched.password && (
                            <div className='input-error'>
                                {/* Errores que hemos personalizado en YUP */}
                                {errors.password}
                            </div>
                        )}
                        {/* Botón para realizar el Submit del formulario */}
                        <button type='submit' disabled={ isSubmitting }>
                            ACCEDER
                        </button>
                        {/* Botón para resetear los campos del formulario */}
                        <button onClick={ resetForm }>Resetear</button>
                    </form>
                )
            }
        }

        </Formik>
    );
}

export default FormularioRegistroFormik;
