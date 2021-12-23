const mixinForm = {
    data(){
        return {
            error: '',
            valid: false,
            
            name:'',
            surname:'',
            email : '',
            password : '',
            image: '' ,

            rules_name :[
                (name) => name.length > 0 || 'Not a valid username',
            ],
            rules_email :[
                (email) => this.validateEmail(email) || 'Not a valid email'
            ],
            rules_password :[
                (password) => password.length > 0 || 'Must type the password'
            ],
            rules_image : [
                (image) => !image || image.size < 2000000 || 'Avatar size should be less than 2 MB'
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