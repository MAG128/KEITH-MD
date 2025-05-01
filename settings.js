/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'ALPHA;;;H4sIAAAAAAAAA61V2Y6rOBD9F78mfcMaIFJLAwTI2pCEdEhG82DAEIc1xpDlKv8+IulWt3S3Hml4sox96lTVqePvIC9whaboAgbfQUlwAylql/RSIjAAWh1FiIAuCCGFYABUK7AdZyw2Hb2YkWLtTNaMy22Za4Je4jk1O9rIE2iSIrZ4BrcuKGs/xcFvAM/nwrSpb5JZlJCSbtnselxgiozUmxoZXs+dtSEgg24T+RncWkSICc5jo9yjDBGYTtHFgZh8jb5hbGO0NASPL0/U8pazy9arZofE3EwuwcSnjYqR3tnJR0b4Gv19Jbj1WOh3dMQvjtvc6y3FdNo5EquXncRFwWS+oSsQmYv1g36F4xyF4xDlFNPLl+ueTeOpAY3UwaislnZgNzSRbSLF4VYg6QnPFt4wsFdnnau+Rhz3CbX6FZNxsWZzl3l41qcNqx6EzXXnWn1hXLt14EV2YxafiTvkXSvJf6k7p03InJNkBu3GhzCf1QKzZsbFkplrR2XCHvqJOR5Nrudp8kXZxF5pcb0C22WhuCHSFGadTXxtX82Ws+y68fcvV7U3Ek3+9VPdIa3J71gyLPXyw8pk9vJ2pImodn2G1zWNiDLkj1KhuS+neJ6pI743m0fnBfSg8VrD5eKaCL2Gy7x8uYi2y22/M0krS1wb58VoqD7fM0rQZRyCAXvrAoJiXFECKS7y+x4ndwEMmxUKCKL38oJsmV0X4Stk1vx+vERJykZhFsWN0vcoSeYFWclajRZLKzeeQReUpAhQVaFwhCtakMscVRWMUQUGf9871SZNUFZQNMFh2w9ekFmGF0WW57m/qm+nPaQVLMtvOaKgCyJSZHMEBpTUqAvuNzRJkAS1L3A6oxnDvqwKnKFruigpuilqnNjmmD2iujhDFYVZCQasJPRZvi8Lwq37PxERGVkRVMVgtD7PsgKjapzJsYaiKYypmJz2ByLy7Z8uyNGZPpTc1p9nuyDCpKLrvC7TAobvMn//CYOgqHO6uuSB3i4QAYNP24hSnMdVm1qdQxLscYP0Ng8wiGBaoVsXhKjBAWrxQBwpi4s4PiyMp90mlXJ83C7MU9vDfZE/jjAcEsUIRU8oROhJ4EXxSZF55gmKCh8KgY9QoIC2HA8Tae/8UtNScu3UqrvhpmxjIm8T7NOTMHHy0jbuunyIEREUvlfZh0FSl26RoPx3D4G5Nmaxy0endefM6o3PIEXTFteLEnzCfYgcDL5/GLdehC2et1NWuuxwoO1WG+dHOQyUHwWRw/Y0WOdJXpzyNtBbF1qIEFGI0woMgD5ze4ddpRkOCa+yalmqEat6rIKPrr37wWPe+vromlbJ2NlfguGZkZo6kXd4sk0NJROPhtVv5Ggzlyork59/AgIGgHULYxz2ydjwsLLStqtyqjuu2ZDOVa/nw9m0msVlvHbzcmhpzGXSSOV8x089cz71R9ooqbYvTqRFy56tqVniWrZ/LLXTcxvtoZ7PwRZ+wJ5LoxFmw0CtQytJU+WMpAusZ/MzX7569q5v+czIW8akc3XQOTruRa5cDVVxGo13oRPYHcZgTn5vKK3IKS2sg/fuVHenTN9eKPzmIQ+tRRjdDf+tC3/s1ofsmVv3E8bbE/ILaWko3suiP9GHQpCrcmhLUulYW7yZLJ1dDfdaTXoj9mBLWtmAWzvPZQppVJAMDADMQ1LgEHRBCiuqfkzuz8yA6YLsopblikL6PvBAbb8Z7oHbv4HumrkdCQAA';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
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
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
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
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
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
