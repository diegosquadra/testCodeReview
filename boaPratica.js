// utils/api.js
export async function fetchCPFStatus(cpf) {
    if (!isValidCPF(cpf)) {
        throw new Error('CPF inválido');
    }
    
    const API_URL = 'https://exemplo.com/api/cpf/status';
    try {
        const response = await fetch(`${API_URL}?cpf=${cpf}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar status do CPF:', error);
        throw error;
    }
}

// utils/validation.js
export function isValidCPF(cpf) {
    const cleanedCPF = cpf.replace(/\D/g, '');
    return cleanedCPF.length === 11 && !/^(\d)\1+$/.test(cleanedCPF);
}

// index.js
import { fetchCPFStatus } from './utils/api.js';
import { isValidCPF } from './utils/validation.js';

(async () => {
    const cpf = '123.456.789-09'; // Exemplo de CPF
    
    try {
        console.log(`Validando CPF: ${cpf}`);
        if (!isValidCPF(cpf)) {
            throw new Error('CPF inválido.');
        }
        
        const status = await fetchCPFStatus(cpf);
        console.log('Status do CPF:', status);
    } catch (error) {
        console.error('Erro:', error.message);
    }
})();
