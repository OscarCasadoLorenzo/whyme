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
                            <v-btn :disabled="!valid" class="primary mt-2" block>Register</v-btn>

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
    mixins:[mixinForm],
}
</script>

<style>

</style>