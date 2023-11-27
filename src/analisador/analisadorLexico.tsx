import IToken from "../interface/IToken";

export default function analisadorLexico(entrada: string) {

    const sigma: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const delta: Record<string, Record<string, string>> = {
        'q0': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q23', 'e': 'q13', 'f': 'q10', 'g': 'q1', 'h': 'q1', 'i': 'q2', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q25', 'q': 'q1', 'r': 'q30', 's': 'q17', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q5', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q4', '1': 'q4', '2': 'q4', '3': 'q4', '4': 'q4', '5': 'q4', '6': 'q4', '7': 'q4', '8': 'q4', '9': 'q4',
                '(': 'q34', ')': 'q35', '[': 'q36', ']': 'q37', '{': 'q38', '}': 'q39', '+': 'q40', '-': 'q42', '*': 'q44', '/': 'q45', '%': 'q46', '<': 'q47', '>': 'q49',
                '!': 'q51', '^': 'q53', ' ': 'q54' },
        'q1': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q2': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q3', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q3': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q4': { '0': 'q4', '1': 'q4', '2': 'q4', '3': 'q4', '4': 'q4', '5': 'q4', '6': 'q4', '7': 'q4', '8': 'q4', '9': 'q4' },
        'q5': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q6', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q6': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q7', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q7': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q8', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q8': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q9', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q9': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q10': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q11', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q11': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q12', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q12': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q13': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q14', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q14': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q15', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q15': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q16', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q16': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q17': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q18', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q18': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q19', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q19': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q20', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q20': { 'a': 'q1', 'b': 'q1', 'c': 'q21', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q21': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q22', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q22': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q23': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q24', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q24': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q25': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q26', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q26': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q27', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q27': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q28', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q28': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q29', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q29': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q30': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q31', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q31': { 'a': 'q32', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q32': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q33', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q33': { 'a': 'q1', 'b': 'q1', 'c': 'q1', 'd': 'q1', 'e': 'q1', 'f': 'q1', 'g': 'q1', 'h': 'q1', 'i': 'q1', 'j': 'q1', 'k': 'q1', 'l': 'q1', 'm': 'q1', 'n': 'q1', 'o': 'q1', 'p': 'q1', 'q': 'q1', 'r': 'q1', 's': 'q1', 't': 'q1', 'u': 'q1', 'v': 'q1', 'w': 'q1', 'x': 'q1', 'y': 'q1', 'z': 'q1', '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1' },
        'q34': {},
        'q35': {},
        'q36': {},
        'q37': {},
        'q38': {},
        'q39': {},
        'q40': { '+': 'q41'},
        'q41': {},
        'q42': { '-': 'q43'},
        'q43': {},
        'q44': {},
        'q45': {},
        'q46': {},
        'q47': {'=': 'q48'},
        'q48': {},
        'q49': {'=': 'q50'},
        'q50': {},
        'q51': {'=': 'q52'},
        'q52': {},
        'q53': {},
        'q54': {},
    };

    const finalPalavra: Record<string, string> = {
        'q1': 'ID', 'q3': 'IF', 'q4': 'CONSTANTE', 'q9': 'WHILE', 'q12': 'FOR', 'q16': 'ELSE', 'q22': 'SWITCH', 'q24': 'DO', 'q29': 'PRINT', 
        'q33': 'READ', 'q34': 'ABRE_PARENTESES', 'q35': 'FECHA_PARENTESES', 'q36': 'ABRE_COCHETES', 'q37': 'FECHA_COCHETES', 'q38': 'ABRE_CHAVES', 'q39': 'FECHA_CHAVES',
        'q40': 'MAIS', 'q41': 'INCREMENTO', 'q42': 'MENOS', 'q43': 'DECREMENTO', 'q44': 'MULTIPLICACAO', 'q45': 'DIVISAO', 'q46': 'PORCENTAGEM', 'q47': 'MENOR_QUE', 'q48': 'MENOR_IGUAL_QUE',
        'q49': 'MAIOR_QUE', 'q50': 'MAIOR_IGUAL_QUE', 'q52': 'DIFERENTE', 'q53': 'POTENCIA', 'q54': 'ESPACO',

    };
    const q0: string = 'q0';
    const finais: string[] = ['q1', 'q3', 'q4', 'q9', 'q12'];

    let listaToken: IToken[] = [];

    let tokenVazio: IToken = {
        Token: '',
        Lexema: '',
        Linha: '',
        PosInicial: '',
        PosFinal: '',
    }

    let token: IToken = tokenVazio

    function checkString(entrada: string): boolean {
        let estado = q0;

        let lexema = '';
        let posInicial = 0;
        let posFinal = 0;


        for (let i = 0; i < entrada.length; i++) {
            estado = q0;
            while (true) {

                if (delta[estado][entrada[i]]) {
                    lexema = lexema + entrada[i];
                    estado = delta[estado][entrada[i]];
                    i++;
                } else {
                    break;
                }
            }
            // cria 
            token = {
                Token: finalPalavra[estado],
                Lexema: lexema,
                Linha: '',
                PosInicial: posInicial.toString(),
                PosFinal: i.toString(),
            }
            listaToken.push(token);
            
            posInicial = i--;

            token = tokenVazio;
            lexema = '';

        }

        return finais.includes(estado);
    }

    checkString(entrada);

    return listaToken;

    if (checkString(entrada)) {
        console.log('Cadeia aceita');
    } else {
        console.log('Cadeia incorreta');
    }
}


