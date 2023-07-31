
export default function teste() {
// Define the input alphabet
const sigma: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Define the transition function delta as a dictionary of dictionaries
const delta: Record<string, Record<string, string>> = {
    'q0': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q10', 'g': 'q1', 'h': 'q1', 'i': 'q2', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q5', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q4', '1': 'q4', '2': 'q4', '3': 'q4', '4': 'q4', '5': 'q4', '6': 'q4', '7': 'q4', '8': 'q4', '9': 'q4' },
    'q1': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1'},
    'q2': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q3', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1', 'o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1', '2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q3': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1', 'o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1', '2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q4': { '0':'q4', '1':'q4', '2':'q4','3':'q4', '4':'q4', '5':'q4', '6':'q4', '7':'q4', '8':'q4', '9':'q4' },
    'q5': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q6', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1', 'o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1', '2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q6': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q7', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1','o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1','2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q7': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q8', 'm':'q1', 'n':'q1','o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1','2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q8': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q9', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1','o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1','2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q9': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1','o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1','2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q10': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1','o':'q11', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1','2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q11': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1','o':'q1', 'p':'q1', 'q':'q1', 'r':'q12', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1','2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
    'q12': { 'a':'q1', 'b':'q1', 'c':'q1', 'd':'q1', 'e':'q1', 'f':'q1', 'g':'q1', 'h':'q1', 'i':'q1', 'j':'q1', 'k':'q1', 'l':'q1', 'm':'q1', 'n':'q1','o':'q1', 'p':'q1', 'q':'q1', 'r':'q1', 's':'q1', 't':'q1', 'u':'q1', 'v':'q1', 'w':'q1', 'x':'q1', 'y':'q1', 'z':'q1', '0':'q1', '1':'q1','2':'q1', '3':'q1', '4':'q1', '5':'q1', '6':'q1', '7':'q1', '8':'q1', '9':'q1' },
};

// Define the set of states Q, initial state q0, and final states finais
const Q: string[] = ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12'];
const q0: string = 'q0';
const finais: string[] = ['q1', 'q3', 'q4', 'q9', 'q12'];

// Define the input string
const entrada: string = 'for';

// Function to simulate the finite automaton and check if the input string is accepted
function checkString(entrada: string): boolean {
    let estado = q0;

    for (let i = 0; i < entrada.length; i++) {
        if (!sigma.includes(entrada[i])) {
            // The input string contains an invalid character
            return false;
        }

        if (delta[estado][entrada[i]]) {
            estado = delta[estado][entrada[i]];
        } else {
            // There is no transition for the current character and state
            return false;
        }
    }

    return finais.includes(estado);
}

// Call the checkString function and display the result
if (checkString(entrada)) {
    console.log('Cadeia aceita');
} else {
    console.log('Cadeia incorreta');
}
}


