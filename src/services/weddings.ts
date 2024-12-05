import parse from './parse';

export async function getMessages(): Promise<any[]> {
    try {
        const result = await parse.get('classes/Wedding');
        if (result.status === 200 && Array.isArray(result.data.results)) {
            return result.data.results;
        }
        console.warn(result.status);
        console.warn(result.data);
        return [];
    } catch (error: any) {
        console.error(error);
        return [];
    }
}

export async function sendMessage(name: string, message: string): Promise<string> {
    if (!name) {
        return 'Masukkan nama';
    }
    if (!message) {
        return 'Masukkan pesan';
    }
    try {
        const result = await parse.post('classes/Wedding', {
            From: name,
            Message: message
        });
        if (result.status === 200) {
            return '';
        }
        console.warn(result.status);
        return result.data;
    } catch (error: any) {
        console.error(error);
        return error;
    }
}