<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex shrink>
                <v-card>                   
                    <v-form v-model="valid">
                        <v-card-text>
                            <v-text-field
                                prepend-icon="mdi-account" 
                                v-model="name" 
                                label="Name"
                                :rules="rules_name"
                            />
                            <v-text-field
                                prepend-icon="mdi-account" 
                                v-model="surname" 
                                label="Surname"
                                :rules="rules_name"
                            />
                            <v-text-field
                                prepend-icon="mdi-email" 
                                v-model="email" 
                                label="Email"
                                :rules="rules_email"
                            />
                            <v-text-field 
                                prepend-icon="mdi-lock"
                                v-model="password" 
                                label="Password" 
                                type="password"
                                :rules="rules_password"
                            />
                            <!--
                            <v-file-input
                                :rules="rules_image"
                                v-model="image"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Pick an avatar"
                                prepend-icon="mdi-camera"
                                label="Avatar"
                            ></v-file-input>
                            -->

                            <v-btn :disabled="!valid" class="primary mt-2" block @click="register">Register</v-btn>

                            <div class="my-2" >
                                <span> 
                                    ¿Having an account?
                                    <router-link class="text-xs-right" to="/login">Login</router-link>
                                </span>
                            </div>
                        </v-card-text>
                    </v-form>
                        
                    <v-alert type="error" color="red" v-show="Boolean(error)">
                        {{error}}
                    </v-alert>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mixinForm} from '../mixins';
export default {
    mixins: [mixinForm],
    methods: {
        register(){
            this.$store.dispatch("register", {
                email: this.email,
                password:this.password,
                image:this.image,
                name:this.name,
                surname:this.surname
            }).then((user)=>{
                this.$router.push("/login");
            }).catch((msg)=>{
                this.error = msg
            })
        }
    }
}
</script>

<style>

</style>