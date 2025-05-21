/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VV246jOBD9F792NAESAonU0gJJCE0uJJDrah4cMGAuhmBDgFH+fUV6enoedke9PBm7dHzq1KnyD0AyTJGJGjD5AfICV5ChbsmaHIEJUEvfRwXoAQ8yCCYAGtftSq6CxRkWbEfEI22RerU5sp9xhjD2r3m8LxfXS7ngXsGjB/LymmD3D4CrRMSbQLYob8ZEXzfSaXSr19YwOlsGEk9r7vLiazg6GfzwFTw6RIgLTIJZHqIUFTAxUWNBXHyN/s3oH3TxNLZ9VZbOtlQxNK1W1PGExoZK/35nipnVjiNw26/RD6P+MdSOosat+gexIQN6nYXY2akXhViHkUajM8f6xbip43f6FAcEeYaHCMOs+bLu+6mqapEc1NRWz/FIiPVIQNvdAJOXlbkspKN0yJnWVt7s/jXiWimv8rhly028E9PL9HTW8h0ayfONeTVJm3EnJ96rkX1Q6O/EreLDK/H/0V3WmpQf0ySVc+d2PzjowlOjP4t07q4WunjhEQmjqpZW5Iu6W+0snqJx21RVP5qmuyWm5nId8nuXlnYoc9YxrOd9qz0J8id9yMriTyyno/G07y4s6Pfddmj6dW0nijAIRU54idsXp4oti/e4TcKOLTKShc/XjjJWZts4Ypt6YOnJONC4phG281Bfe4Y/3nDq9vWZUYwawwMT/tEDBQowZQVkOCPdniz0APQqG7kFYk91gRHI1Uk7DO3tSoD2iNxf3MgkfktOTn7yb1KtNMf2xTjfzsNX0AN5kbmIUuQtMGVZ0awQpTBAFEz+/t4DBNXsvW7dbQO+B3xcULYnZZ5k0Pso6schdN2sJMxuiKt1C1SACfe5jRjDJKCdjCWBhRviCmkhZBRMfJhQ9CtBVCAPTFhRol9Nq2XeU3fJspe7gwR6IH3WA3tgAoTBUOa5gSjyg4Ew4Yd/0W/3Dhfm+TeCGOiB5D1OFIShLAyHg5EkynwX2R08flHsED3EIE5oZ/Sl348uVJ2tU5e5M11XZoGiBQr4TOnDGu/aj7RFm9DYsMLGndacVJWxfMFv52Q2TsXbTB9Vsn9cSVRP5dd/Ael8JKUiW2h3utmqznywFvP5rbhFydJk2yxPx7c8MRVXX1+qYbbgs3keSNq+rGUjobJZqyPKN/lBTHVvdihRKzuj/OArwWt3m4cq7KLfL5MPonoXjGuLjkfzNlIc6Q4dXMT1SD3Pp5Gh8voN7TgMT30jyZ0Z17y1JltKpyRdiKt9O8+E8bK/wOJgkHBL7cWGband3037bJrk57DCTz91xep+fYyevU9gV8IvFO+deWcy7tH7DeTnOPmPllRREMri9U2bDl2iyN5GknJLP+Pj2866lDBUy6K/4KONpOYVeDy+90CeQOZnRdo9VsQrMuyBHiiysnOtQfzsTzNRCYynzo8eSCBlymcnODhFlME0BxNeGkrSeDwSxfcoq8jyBaQhmACSDtRr5+pGyXObQfbRV0DpvpWSgcc/mzHC0XIHAAA='
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
