import React from 'react';
// Hacer uso de FORMIK que no es más que un wrapper - gestor de formularios reactivos
import { Formik } from 'formik';
// Hacer uso de YUP para validar nuestros formularios
import * as Yup from 'yup';
// Añadimos los estilos para el formulario:
import '../../styles/Formik.css';

import {Redirect} from 'react-router-dom';

const FormLoginReduxSaga = ({ loged, onLogin }) => {

    return loged ? 
            (<Redirect to='/profile' />) 
        : 
        (
        <Formik

            //******* DECLARAMOS LOS VALORES INICIALES DEL FORMAULARIO ***** */
            initialValues = {
                { 
                    email: '',
                    password: ''
                }
            }

            //******* DECLARAMOS LA FUNCIÓN QUE SE DEBE EJECUTAR EN EL ONSUBMIT DEL FORMAULARIO ***** */
            onSubmit = {
                (values) => {
                    // Realizaríamos la llamada a la petición HTTP para hacer el login
                    onLogin(values.email, values.password);
                }
            }

            // ****** VALIDACIÓN DE CAMPOS A TRAVÉS DE YUP ********
            // Creamos un esquema del aspecto que tendrá el objeto formulario y sus campos
            // además de las validaciones que se requieran
            validationSchema = {
                Yup.object().shape(
                    {
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

export default FormLoginReduxSaga;
