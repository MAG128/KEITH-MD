/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU2ZKiSBT9l3zV6JJNwIiKGDYFFZdCFJiYhxQSTFkrSVDsqH/vQKumK2J6emp4SnK595xzz73fQVHiGi1QBybfQUVwCynql7SrEJgAtYljRMAQRJBCMAGNdbwEza3IO2ErnfdH1Z2pU7XO9/tVNA8sXUgsjtm1U82rn8HbEFTNMcPhbwKW2TwKyer1otrjbtuNCrjN+Fpbb/L29cw7Mz5iBVMzOLhTnsFbHxFigovEqE4oRwRmC9RtICZfgy+ZNx/jON+59gJVPGeR86n1eNUrJcUfYO4p81t+ezjEefg1+AMSrkvX15uBrPPe2A2hFcsvbJdvrNu20lXH3+S766JS9+EDfo2TAkVWhAqKafdl3UvNq+bWiDCdmhz3tILpfC3sDaF0z/TAn9JbHXiX80E38y/qXpiznZrJq2CZmi/bqbF7kZMWHi4s1QXONXdus5Xlogpfpv5n4Bvy4ZX0/+gO7YO0okJjH9pq6Rr1mAuOAZ6HDrXaWnCueqBig2ehPLK+CF+4OkZQjRLGRN48lC4Df7o9u8khVnPvNUq94OJIhAumOPkJH9KG/A5lek5Soym06CZynnctG99I4jUisgVH/NUeVV5QXm4HxRlt93tPhgVb0Qte34KV1yJvdtWWcbjeHX1Zlw2mnHVPVM305PnOKEWdFYEJ8zYEBCW4pgRSXBb3vRE/BDBqHRQSRO/ygmK8t108Z6XQfV2mooJWa6FKdlprC3poLxezTGSNeOo0jfIMhqAiZYjqGkUmrmlJOhvVNUxQDSZ/3ivVkyYoLyma4whMAMvxEjPiBIHhOPaP+tvlBGkNq+pbgSgYgpiUuY3AhJIGDcH9BTNWeUYc8ywjcgajKJwsjvQxq/MaL0gcw/Qc80fWHc5RTWFegQkj8uKYHTOy9PbXEBToSh8G6mlzzBDEmNTULZoqK2H04a6PQxiGZVNQpytCrV8gAiafthGluEjqnlpTQBKecIu0ngeYxDCr0d9KI4KiDy7v00Mro94AS23ByRvxAHrsfaB/ijNhfqFP9rgnsCwvsTzPjUVBYvqb/cEQFLCPBtwiLcpL0SvzjrlPESEKcVaDCdCWx6dzUKuG7b281sZsphiJoiUK+Mnxw7QPU4w185bVqbU5daF+HYltk0oBnvuZIefCqzEbt1J8sMV6lkvPvwjS28rm16aCVufrNWLpNOMcL7qF60uyyN1CrbowgLkrk9ONHRxzvxlbfC29ciq/VpF21PwzFy+bo3WSpWIuaddyrXkpp1+e+2wRanGIPierFJOuFgPbM5VV7DW2EzT+Utr7kenuLzuMoj0jek2qJL40cKrYaLdBymc3VkPbM014/Wac/WUlqOriel04jAk3p4G2fbTTvZ2z9zGK342O778xRvep9F6F/67mA3nvutHb8FOQ90H3L8NCRclJEo5zTefDQpGitShWm5mPD/OXTdDAk9qQJ5M5r0W1asFbb/8qgzQuSd7PwyIi5d0rpGx6G1tFXP4mmaYklvI+STJYU+Vna/yq2/jHrQ0pKxPWp77wOacee5t3SlU5FNKPRgNK/9lKAd5+AHu24eYMCAAA'
const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "234";
const author = process.env.OWNER_NAME || 'MAG';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '2348103551332';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'MAG-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'false';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'MAG declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
