//PARTE DE CADASTRO DO USÚARIO
async function registrarUsuario(user, email, password) {
  try {
    const resposta = await fetch('http://localhost:3000/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: user,
        email: email,
        senha: password
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Usuário registrado com sucesso!');
      console.log('Detalhes:', dados);
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 409:
          console.warn('❗ Esse nome de usuário já está em uso. Tente outro.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}



async function fazerLogin(user, email, password) {
  try {
    const resposta = await fetch('http://localhost:3000/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: user,
        email: email,
        senha: password
      })


      
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Login realizado com sucesso!');
      console.log('Bem-vindo,', dados.nome || user); // se o backend retornar o nome
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Requisição inválida. Verifique os dados enviados.');
          break;
        case 401:
          console.warn('🔒 Usuário ou senha incorretos.');
          break;
        case 404:
          console.warn('❌ Usuário não encontrado.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
}

async function menu() {
  let exit = false;

  while (!exit) {
    const option = prompt("Escolha uma opção:\n1 - Fazer login\n2 - Cadastrar novo usuário\n3 - Sair");

    switch (option) {
      case "1":
        const user1 = prompt("Digite o nome");
        const email1 = prompt("Digite um email");
        const pass1 = prompt("Digite a senha");
        await fazerLogin(user1, email1, pass1);
        break;
      case "2":
        const user2 = prompt("Digite um nome");
        const email2 = prompt("Digite um email");
        const pass2 = prompt("Digite uma senha");
        await registrarUsuario(user2, email2, pass2);
        break;
      case "3":
        console.log("Saindo...");
        exit = true;
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
}





//PARET DO GRUPO
async function entrargrupo(user, number) {
  try {
    const resposta = await fetch('http://localhost:3000/grupos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: user,
        numero: number
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Entrada no grupo com sucesso!');
      console.log('Detalhes:', dados);
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 409:
          console.warn('❗ Esse nome de usuário já está em uso. Tente outro.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

async function procurarItem(user, number) {
  try {
    const resposta = await fetch('http://localhost:3000/cadastrogrupo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: user,
        numero: number
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Entrada realizada!');
      console.log('Grupo,', dados.user || number); // se o backend retornar o item
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Requisição inválida. Verifique os dados enviados.');
          break;
        case 401:
          console.warn('🔒 Usuário ou senha incorretos.');
          break;
        case 404:
          console.warn('❌ Usuário não encontrado.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
}

async function menu2() {
  let exit = false;

  while (!exit) {
    const option = prompt("Escolha uma opção:\n1 - Entrar em um grupo\n2 - Sair");

    switch (option) {
      case "1":
        const user1 = prompt("Digite o seu nome");
        const number1 = prompt("Digite o seu numero");
        await grupo(user1, number1);
        break;
      case "2":
        console.log("Saindo...");
        exit = true;
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
}





    //PARTE DO ITEM
    async function item(category, model, mark) {
      try {
        const resposta = await fetch('http://localhost:3000/itens', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            categoria: category,
            modelo: model,
            marca: mark
          })
        });

        const dados = await resposta.json();

        if (resposta.ok) {
          console.log('✅ Item porcurado com sucesso!');
          console.log('Detalhes:', dados);
        } else {
          switch (resposta.status) {
            case 400:
              console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
              break;
            case 409:
              console.warn('❗ Esse nome de usuário já está em uso. Tente outro.');
              break;
            case 500:
              console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
              break;
            default:
              console.warn(`❗ Erro inesperado: ${resposta.status}`);
          }

          console.debug('Detalhes do erro:', dados.mensagem || dados);
        }
      } catch (erro) {
        console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
      }
    }

    async function procurarItem(category, model, mark) {
      try {
        const resposta = await fetch('http://localhost:3000/itens', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            categoria: category,
            modelo: model,
            marca: mark
          })
        });

        const dados = await resposta.json();

        if (resposta.ok) {
          console.log('✅ Procura realizada!');
          console.log('Produto,', dados.category || model || mark); // se o backend retornar o item
        } else {
          switch (resposta.status) {
            case 400:
              console.warn('⚠️ Requisição inválida. Verifique os dados enviados.');
              break;
            case 401:
              console.warn('🔒 Usuário ou senha incorretos.');
              break;
            case 404:
              console.warn('❌ Usuário não encontrado.');
              break;
            case 500:
              console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
              break;
            default:
              console.warn(`❗ Erro inesperado: ${resposta.status}`);
          }

          console.debug('Detalhes do erro:', dados.mensagem || dados);
        }
      } catch (erro) {
        console.error('🚫 Erro de conexão com o servidor:', erro.message);
      }
    }

    async function menu3() {
      let exit = false;

      while (!exit) {
        const option = prompt("Escolha uma opção:\n1 - Buscar por item\n2 - Sair");
        var item = true;
        if(item == true){
        switch (option) {
          case "1":
            const user1 = prompt("Digite a categoria do item");
            const email1 = prompt("Digite o modelo do item");
            const pass1 = prompt("Digite a marca do item");
            await item(user1, email1, pass1);
            break;
          case "2":
            console.log("Saindo...");
            exit = true;
            break;
          default:
            console.log("Opção inválida.");
            break;
        }
      }
    }

    //PARTE DA COMPRA
    async function compra(user, email, number, TipoPag, street, neighborhood, city, state, cpf) {
      try {
        const resposta = await fetch('http://localhost:3000/compra', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome: user,
            email: email,
            numero: number, 
            pagtoTipo: TipoPag,
            rua: street, 
            bairro: neighborhood, 
            cidade: city,
            estado: state,
            cpf: cpf
          })
        });

        const dados = await resposta.json();

        if (resposta.ok) {
          console.log('✅ Compra realizada!');
          console.log('Detalhes:', dados);
        } else {
          switch (resposta.status) {
            case 400:
              console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
              break;
            case 409:
              console.warn('❗ Esse nome de usuário já está em uso. Tente outro.');
              break;
            case 500:
              console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
              break;
            default:
              console.warn(`❗ Erro inesperado: ${resposta.status}`);
          }

          console.debug('Detalhes do erro:', dados.mensagem || dados);
        }
      } catch (erro) {
        console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
      }
    }

    async function cadastroCompra(user, email, number, TipoPag, street, neighborhood, city, state, cpf) {
      try {
        const resposta = await fetch('http://localhost:3000/compra', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome: user,
            email: email,
            numero: number, 
            pagtoTipo: TipoPag,
            rua: street, 
            bairro: neighborhood, 
            cidade: city,
            estado: state,
            cpf: cpf
          })
        });

        const dados = await resposta.json();

        if (resposta.ok) {
          console.log('✅ Compra realizada!');
          console.log('Compra,', dados.user || email || number || TipoPag || street || neighborhood || city || state || cpf); // se o backend retornar o item
        } else {
          switch (resposta.status) {
            case 400:
              console.warn('⚠️ Requisição inválida. Verifique os dados enviados.');
              break;
            case 401:
              console.warn('🔒 Usuário ou senha incorretos.');
              break;
            case 404:
              console.warn('❌ Usuário não encontrado.');
              break;
            case 500:
              console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
              break;
            default:
              console.warn(`❗ Erro inesperado: ${resposta.status}`);
          }

          console.debug('Detalhes do erro:', dados.mensagem || dados);
        }
      } catch (erro) {
        console.error('🚫 Erro de conexão com o servidor:', erro.message);
      }
    }

    async function menu4() {
      let exit = false;

      while (!exit) {
        const option = prompt("Escolha uma opção:\n1 - Deseja efetuar uma compra?\n2 - Sair");
          switch (option) {
            case "1":
              const user1 = prompt("Digite o seu nome");
              const email1 = prompt("Digite o seu email")
              const number1 = prompt("Digite o seu numero");
              const TipoPag1 = prompt("Digite o tipo de pagamento");
              const street1 = prompt("Digite a sua rua");
              const neighborhood1 = prompt("Digite o seu bairro");
              const city1 = prompt("Digite a sua cidade");
              const state1 = prompt("Digite o seu estado");
              const cpf1 = prompt("Digite o seu cpf");
              await compra(user1, email1, number1, TipoPag1, street1, neighborhood1, city1, state1, cpf1);
              break;
            case "2":
              console.log("Saindo...");
              exit = true;
              break;
            default:
              console.log("Opção inválida.");
              break;
          }
      }
    } 
  }

function menuFinal(){
  menu();
  menu2();
  menu3(itemCompra());
  menu4();
}

menuFinal();



/*//PARTE DO ITEM
async function item(category, model, mark) {
  try {
    const resposta = await fetch('http://localhost:3000/itens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        categoria: category,
        modelo: model,
        marca: mark
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Usuário registrado com sucesso!');
      console.log('Detalhes:', dados);
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.');
          break;
        case 409:
          console.warn('❗ Esse nome de usuário já está em uso. Tente outro.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

async function procurarItem(category, model, mark) {
  try {
    const resposta = await fetch('http://localhost:3000/itens', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        categoria: category,
        modelo: model,
        marca: mark
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Procura realizada!');
      console.log('Produto,', dados.category || model || mark); // se o backend retornar o item
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Requisição inválida. Verifique os dados enviados.');
          break;
        case 401:
          console.warn('🔒 Usuário ou senha incorretos.');
          break;
        case 404:
          console.warn('❌ Usuário não encontrado.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
}

async function menu() {
  let exit = false;

  while (!exit) {
    const option = prompt("Escolha uma opção:\n1 - Buscar por item\n2 - Sair");

    switch (option) {
      case "1":
        const user1 = prompt("Digite a categoria do item");
        const email1 = prompt("Digite o modelo do item");
        const pass1 = prompt("Digite a marca do item");
        await fazerLogin(user1, email1, pass1);
        break;
      case "2":
        console.log("Saindo...");
        exit = true;
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
}

menu();*/
