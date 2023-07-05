const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const express = require('express');
const socketIO = require('socket.io');
const qrcode = require('qrcode');
const http = require('http');
const fileUpload = require('express-fileupload');
const port = 8000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const mysql = require('mysql2/promise');
const nodeCron = require("node-cron");

// Função para criar conexão com o banco de dados
const createConnection = async () => {
    return await mysql.createConnection({
        host: '212.1.208.101',
        user: 'u896627913_riolargo01',
        password: 'Felipe.91118825',
        database: 'u896627913_riolargo'
    });
}

const updateStatuscob = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE cobranca SET statusco = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusco:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatusvd = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusvd = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusvd:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

// Função para atualizar o statusdf no banco de dados
const updateStatusdf = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusdf = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusdf:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatus1m = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET status1m = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o status1m:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatus3m = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET status3m = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o status3m:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatus6m = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET status6m = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o status6m:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatus12m = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET status12m = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o status12m:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatusan = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_os SET statusan = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusan:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatusga = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_garantia SET statuss = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statuss:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatusgaf = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_garantia SET statusf = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusf:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatusag = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_pap SET statusen = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusen:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const updateStatusco = async (id) => {
    try {
        const connection = await createConnection();
        const query = 'UPDATE controle_pap SET statusco = ? WHERE id = ?';
        const params = ['enviado', id];
        const [result] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return result.affectedRows > 0;
    } catch (error) {
        console.error('Erro ao atualizar o statusco:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};


const agendamentoZDG0 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM cobranca WHERE statusco IS NULL OR statusco = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_os WHERE statusvd IS NULL OR statusvd = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG2 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_os WHERE statusdf IS NULL OR statusdf = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG3 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_os WHERE status1m IS NULL OR status1m = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG4 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_os WHERE status3m IS NULL OR status3m = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG5 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_os WHERE status6m IS NULL OR status6m = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG6 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_os WHERE status12m IS NULL OR status12m = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG7 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_os WHERE statusan IS NULL OR statusan = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG8 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_garantia WHERE statuss IS NULL OR statuss = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG9 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_garantia WHERE statusf IS NULL OR statusf = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG10 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_pap WHERE statusen IS NULL OR statusen = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

const agendamentoZDG11 = async () => {
    try {
        const connection = await createConnection();
        const query = 'SELECT * FROM controle_pap WHERE statusco IS NULL OR statusco = ?';
        const params = [''];
        const [rows] = await connection.execute(query, params);
        connection.end(); // Feche a conexão com o banco de dados

        return rows;
    } catch (error) {
        console.error('Erro ao obter os registros de agendamento:', error);
        throw error; // Propague o erro para ser tratado em outro lugar
    }
};

// Configuração do servidor Express e Socket.IO
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(fileUpload({
    debug: true
}));

// Rota principal do aplicativo
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname
    });
});

// Criação do cliente do WhatsApp
const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'bot-zdg' }),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process', // <- this one doesn't work in Windows
            '--disable-gpu'
        ]
    }
});

// Inicialização do cliente do WhatsApp
client.initialize();

// Configuração do Socket.IO para comunicação em tempo real
let authenticated = false;
let sentMessages = []; // Lista de mensagens enviadas

io.on('connection', function (socket) {
    socket.emit('message', 'Conectando...');

    // Evento para receber o QR Code e exibi-lo na interface
    client.on('qr', (qr) => {
        console.log('QR RECEIVED', qr);
        qrcode.toDataURL(qr, (err, url) => {
            socket.emit('qr', url);
            socket.emit('message', 'QRCode recebido, aponte a câmera do seu celular!');
        });
    });

    // Evento disparado quando o cliente está pronto para uso
    client.on('ready', async () => {
        socket.emit('ready', 'Dispositivo pronto!');
        socket.emit('message', 'Dispositivo pronto!');

        nodeCron.schedule('*/60 * * * * *', async function () {
            try {
                const agendamentosCobranca = await agendamentoZDG0();
                const agendamentosSolicitacao = await agendamentoZDG();
                const agendamentosFinalizacao = await agendamentoZDG2();
                const agendamentosDate1m = await agendamentoZDG3();
                const agendamentosDate3m = await agendamentoZDG4();
                const agendamentosDate6m = await agendamentoZDG5();
                const agendamentosDate12m = await agendamentoZDG6();
                const agendamentosDataAniversario = await agendamentoZDG7();
                const agendamentosGarantia = await agendamentoZDG8();
                const agendamentosGarantiafi = await agendamentoZDG9();
                const agendamentosPap = await agendamentoZDG10();
                const agendamentosPapd = await agendamentoZDG11();

                const hoje = new Date();

                // Certifique-se de ter definido e inicializado as variáveis de agendamento corretamente antes deste trecho de código.

                for (const agendamento of agendamentosCobranca) {
                    if (agendamento.data_cobranca && agendamento.data_cobranca <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagemco && agendamento.mensagemco.trim() !== '') {
                                    console.log('URL da mensagemco:', agendamento.mensagemco);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagemco);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatuscob(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statusco atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statusco da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }

                for (const agendamento of agendamentosSolicitacao) {
                    if (agendamento.data_solicitacao && agendamento.data_solicitacao <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagemvd && agendamento.mensagemvd.trim() !== '') {
                                    console.log('URL da mensagemvd:', agendamento.mensagemvd);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagemvd);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatusvd(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statusvd atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statusvd da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }



                for (const agendamento of agendamentosFinalizacao) {
                    if (agendamento.data_finalizacao && agendamento.data_finalizacao <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagemdf && agendamento.mensagemdf.trim() !== '') {
                                    console.log('URL da mensagemdf:', agendamento.mensagemdf);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagemdf);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatusdf(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statusdf atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statusdf da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }


                for (const agendamento of agendamentosDate1m) {
                    if (agendamento.date1m && agendamento.date1m <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagem1m && agendamento.mensagem1m.trim() !== '') {
                                    console.log('URL da mensagem1m:', agendamento.mensagem1m);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagem1m);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatus1m(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - status1m atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o status1m da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }



                for (const agendamento of agendamentosDate3m) {
                    if (agendamento.date3m && agendamento.date3m <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagem3m && agendamento.mensagem3m.trim() !== '') {
                                    console.log('URL da mensagem3m:', agendamento.mensagem3m);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagem3m);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatus3m(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - status3m atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o status3m da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }



                for (const agendamento of agendamentosDate6m) {
                    if (agendamento.date6m && agendamento.date6m <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagem6m && agendamento.mensagem6m.trim() !== '') {
                                    console.log('URL da mensagem6m:', agendamento.mensagem6m);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagem6m);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatus6m(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - status6m atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o status6m da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }



                for (const agendamento of agendamentosDate12m) {
                    if (agendamento.date12m && agendamento.date12m <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagem12m && agendamento.mensagem12m.trim() !== '') {
                                    console.log('URL da mensagem12m:', agendamento.mensagem12m);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagem12m);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatus12m(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - status12m atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o status12m da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }


                for (const agendamento of agendamentosDataAniversario) {
                    if (agendamento.data_aniversario && agendamento.data_aniversario <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensageman && agendamento.mensageman.trim() !== '') {
                                    console.log('URL da mensageman:', agendamento.mensageman);
                                    const media = await MessageMedia.fromUrl(agendamento.mensageman);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatusan(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statusan atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statusan da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }


                for (const agendamento of agendamentosGarantia) {
                    if (agendamento.data_solicitacao && agendamento.data_solicitacao <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagems && agendamento.mensagems.trim() !== '') {
                                    console.log('URL da mensagems:', agendamento.mensagems);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagems);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatusga(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statuss atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statuss da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }



                for (const agendamento of agendamentosGarantiafi) {
                    if (agendamento.data_finalizacao && agendamento.data_finalizacao <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagemf && agendamento.mensagemf.trim() !== '') {
                                    console.log('URL da mensagemf:', agendamento.mensagemf);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagemf);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatusgaf(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statusf atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statusf da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }



                for (const agendamento of agendamentosPap) {
                    if (agendamento.data_entrevista && agendamento.data_entrevista <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagemen && agendamento.mensagemen.trim() !== '') {
                                    console.log('URL da mensagemen:', agendamento.mensagemen);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagemen);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatusag(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statusen atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statusen da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }


                for (const agendamento of agendamentosPapd) {
                    if (agendamento.data_consulta && agendamento.data_consulta <= hoje && !agendamento.enviado) {
                        try {
                            // Verificar se a mensagem já foi enviada
                            if (!sentMessages.includes(agendamento.id)) {
                                if (agendamento.nome && agendamento.nome.trim() !== '') {
                                    const exists = await client.checkNumberStatus(agendamento.fone + '@c.us');
                                    if (exists.canReceiveMessage) {
                                        await client.sendMessage(agendamento.fone + '@c.us', agendamento.nome);
                                    } else {
                                        console.log(`Número de telefone inválido ou não registrado: ${agendamento.fone}`);
                                    }
                                }

                                if (agendamento.mensagemco && agendamento.mensagemco.trim() !== '') {
                                    console.log('URL da mensagemco:', agendamento.mensagemco);
                                    const media = await MessageMedia.fromUrl(agendamento.mensagemco);
                                    await client.sendMessage(agendamento.fone + '@c.us', media, { caption: 'Óticas Diniz' });
                                }

                                const success = await updateStatusco(agendamento.id);
                                if (success) {
                                    // Marcar o agendamento como enviado
                                    agendamento.enviado = true;
                                    sentMessages.push(agendamento.id); // Adicionar à lista de mensagens enviadas
                                    console.log(`BOT-ZDG - Mensagem ID: ${agendamento.id} - statusco atualizado para "enviado"`);
                                } else {
                                    console.log(`BOT-ZDG - Falha ao atualizar o statusco da mensagem ID: ${agendamento.id}`);
                                }
                            }
                        } catch (error) {
                            console.error('Erro ao enviar a mensagem:', error);
                        }
                    }
                }



            } catch (error) {
                console.error('Erro na tarefa agendada:', error);
            }
        });

    });
    // Evento disparado quando o cliente é autenticado com sucesso
    client.on('authenticated', () => {
        if (!authenticated) {
            authenticated = true;
            socket.emit('authenticated', 'Autenticado!');
            socket.emit('message', 'Autenticado!');
            console.log('Autenticado');
        }
    });

    // Evento disparado quando a autenticação falha
    client.on('auth_failure', function () {
        socket.emit('message', 'Falha na autenticação, reiniciando...');
        console.error('Falha na autenticação');
    });

    // Evento disparado quando o estado de conexão do cliente muda
    client.on('change_state', state => {
        console.log('Status de conexão:', state);
    });

    // Evento disparado quando o cliente é desconectado
    client.on('disconnected', (reason) => {
        socket.emit('message', 'Cliente desconectado!');
        console.log('Cliente desconectado', reason);
        client.initialize();
    });
});

// Inicialização do servidor
server.listen(port, function () {
    console.log('BOT-ZDG rodando na porta *:' + port);
});
