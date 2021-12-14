const mixinForm = {
    data(){
        return {
            error: '',
            valid: false,
            name:'',
            email : '',
            password : '',

            rules_name :[
                (name) => name.length > 0 || 'Not a valid username',
            ],
            rules_email :[
                (email) => this.validateEmail(email) || 'Not a valid email'
            ],
            rules_password :[
                (password) => password.length > 0 || 'Must type the password'
            ]
        }
    },
    methods:{
        validateEmail(email){
            var re = /\S+@\S+\.\S+/;
            return re.test(String(email).toLowerCase());
        }
    }
}

export {
    mixinForm
}