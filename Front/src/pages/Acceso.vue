<template>
    <div>
        <div class="row formulario">
            <div class="col-12 pt-3">
                <h1>Bienvenido de vuelta!</h1>
            </div>
            <div class="col-12 text-center">
                <form @submit.prevent="ingresoUsuario({email: email, password: pass})" class="form__ ">
                    <div class="form__focus">
                        <input 
                        type="email"
                        placeholder=" "
                        v-model="email"
                        class="form-control form__input"
                        required>
                        <label for="" class="form__label">Ingrese contraseña</label>
                     </div>
                    <div class="form__focus">
                        <input 
                        type="text"
                        v-model="pass"
                        placeholder=" "
                        class="form-control form__input"
                        required>
                        <label for="" class="form__label">Ingrese contraseña</label>
                    </div>

                    <button type="submit" class="btn btn-outline-success mt-2 rounded-pill">Acceder</button>
                </form>
            </div>
        </div>
        <p>{{error}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default{
    name: 'Acceso',
    data(){
        return{
            email: '',
            pass: ''
        }
    },
    methods:{
        ...mapActions(['ingresoUsuario'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>

<style>
body{
    background: #fff;
    direction: ltr;
    font-size: 14px;
    line-height: 1.4286;
    margin: 0;
    padding: 0;
}

.container-fluid {
    height: 100vh;
}

h1{
    color: #04C56F;
    padding-bottom: 0;
    padding-top: 16px;
    font-family: 'Google Sans','Noto Sans Myanmar UI',arial,sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.3333;
    margin-bottom: 0;
    margin-top: 0;
}

.formulario{
    width: 600px;
    height: 450px;
    border-style: solid;
    border-color: #fff;
    padding: 0 2.5rem;
}

.form__focus{
  position: relative;
  height: 48px;
  margin-bottom: 0.5rem;
}
.form__input{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: .2rem ;
  outline: none;
  padding: 1rem;
  background: none;
  border: 1px solid #DADCE0;
  z-index: 1;
}
.form__label{
  position: absolute;
  left: 1rem;
  top: 0.7rem;
  padding: 0 .25rem;
  background-color: #fff;
  font-size: 1rem;
  color: #80868B;
  transition: .15s;
}

.form__input:focus + .form__label{
  top: -.5rem;
  left: .8rem;
  color: #04C56F;
  font-size: .75rem;
  font-weight: 500;
  z-index: 10;
}

/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus)+ .form__label{
  top: -.5rem;
  left: .8rem;
  font-size: .75rem;
  font-weight: 500;
  z-index: 10;
}

/*Input focus*/
.form__input:focus{
  border: 1.5px solid #04C56F;
}
</style>