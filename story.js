export default [
    {
        smileySays: '¡Hola! ¿Cómo estás?',
        buttons: [
            { value: -1, text: '¡No es asunto tuyo!' },
            { value: 0, text: 'Bien, gracias.' }
        ]
    },
    {
        smileySays: '¿Cuánta madera podría cortar una marmota si una marmota pudiera cortar madera?',
        buttons: [
            { value: 1, text: '¡Vaya, qué buena pregunta! :D' },
            { value: 0, text: '¿4..?' }
        ]
    },
    {
        smileySays: '¿Cuál es mejor, Svelte o React?',
        buttons: [
            { value: 2, text: '¡Svelte es el futuro!' },
            { value: -1, text: 'React por siempreeeeeee' }
        ]
    },
    {
        smileySays: '¿Quieres escuchar la última pregunta?',
        buttons: [
            { value: -1, text: 'No..' },
            { value: 1, text: '¡Sí!' }
        ]
    },
    {
        smileySays: '¿Me quieres?',
        buttons: [
            { value: 0, text: 'emmmmmm......' },
            { value: 1, text: '¡Claro que sí!' },
            { value: -2, text: 'Definitivamente te odio.' }
        ]
    },
    {
        end: {
            nice: 'Creo que a Smiley le caes bien.',
            neutral: 'No sé si a Smiley le caes bien..',
            mean: 'A Smiley no le caes bien..',
        },
        buttons: [
            { value: 'reset', text: 'Reiniciar' }
        ]
    }
];
