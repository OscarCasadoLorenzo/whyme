<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex shrink>
                <v-card>                   
                    <v-form v-model="valid">
                        <v-card-text>
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
                            />
                            <v-btn 
                                :disabled="!valid" 
                                class="primary mt-2" 
                                block
                                @click="login"
                                >Login
                            </v-btn>

                            <div class="my-2" >
                                <span> 
                                    ¿No account?
                                    <router-link class="text-xs-right" to="/register">Register</router-link>
                                </span>
                            </div>
                        </v-card-text>
                    </v-form>
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
        login(){
            this.$store.dispatch("login", {
                email: this.email,
                password:this.password,
            }).then((user)=>{
                this.$router.push("/");
            }).catch((msg)=>{
                this.error = msg
            })
        }
    }
}
</script>

<style>

</style>