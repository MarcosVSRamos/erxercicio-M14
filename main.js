$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');

    $('#form-viaje-conosco').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
        },

        messages: {
            nome: 'Este campo é obrigatório!',
            email: 'Este campo é obrigatório!',
            mensagem: 'Este campo é obrigatório!'
        },

        submitHandler: function(form){
            let nome = $('#nome').val();
            alert(`Parabéns ${nome}, entraremos em contato em até 24Hr!`);
            form.submit();
        },

    })

})