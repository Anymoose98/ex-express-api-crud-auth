const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const registerBody = {
    email:{
        in: ["body"],
        notEmpty: {
            errorMessage: 'Email è un campo obbligatorio.',
            bail: true
        },
        isEmail: {
            errorMessage: 'Email deve essere una mail valida',
            bail: true
        },
        custom: {
            options: async (value) => {
                const user = await prisma.user.findUnique({
                    where: {email: value}
                });
                if(user){
                    throw new Error(`Email esistente`);
                }
                return true;
            }
        }
        },
            password: {
                in: ["body"],
                notEmpty: {
                    errorMessage: 'Password è un campo obbligatorio.',
                    bail: true
                },
                isString: {
                    errorMessage: 'Password deve essere una stringa.',
                    bail: true
                },
                isLength: {
                    errorMessage: 'Password deve essere di almeno 8 caratteri',
                    options: {min: 8}
                }
            }
}

const loginBody = {
    email: {
        in: ["body"],
        notEmpty:{
            errorMessage:"Email è obbligatorio",
            bail:true
        },
        isEmail:{
            errorMessage:"Email non valida"
        }
    },
    password:{
        in:["body"],
        notEmpty:{
            errorMessage:"Password obbligatoria",
            bail: true
        },
        isString:{
            errorMessage: "Password non valida"
        }
    }
}

module.exports = {
    registerBody,
    loginBody
}