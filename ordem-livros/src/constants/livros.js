import autores from "./autores";

const livros = [
    {
        id: "livros-ali",
        autor: autores[0],
        livros: [
          {
            id: "the-love-hypothesis",
            titulo: "A Hiposte do Amor",
            descricao: "Uma comédia romântica que segue a cientista Olive Smith enquanto ela se envolve em um namoro falso com um professor para provar um ponto e acaba descobrindo o amor verdadeiro.",
            imagem: "https://linkparaimagem.com/the-love-hypothesis.jpg",
            link: "https://www.amazon.com/dp/0593336828"
          },
          {
            id: "love-on-the-brain",
            titulo: "Love on the Brain",
            descricao: "Bee Königswasser é uma neurocientista que precisa trabalhar com um rival no mundo acadêmico, Levi Ward, em um projeto da NASA, onde a tensão inicial dá lugar a algo mais profundo.",
            imagem: "https://linkparaimagem.com/love-on-the-brain.jpg",
            link: "https://www.amazon.com/dp/0593336844"
          },
          {
            id: "below-zero",
            titulo: "Below Zero",
            descricao: "Uma engenheira aeroespacial enfrenta perigos no Ártico enquanto luta com emoções conflitantes em relação a um colega que ela nunca imaginou confiar.",
            imagem: "https://linkparaimagem.com/below-zero.jpg",
            link: "https://www.amazon.com/dp/0593437810"
          }
        ]
      }, 
      {
        id: "livros-sarah",
        titulo: "Sarah Adams",
        autor: autores[2],
        livros: [
          {
            id: "the-cheat-sheet",
            titulo: "The Cheat Sheet",
            descricao: "Uma comédia romântica sobre melhores amigos que começam a questionar seus sentimentos enquanto lidam com a atenção da mídia.",
            imagem: "https://m.media-amazon.com/images/I/41bkvywmw1L._SY445_SX342_.jpg",
            link: "https://www.amazon.com.br/T%C3%A1ticas-do-amor-Sarah-Adams/dp/6555608498/ref=sr_1_1?crid=3R10LK7TPEHTG&dib=eyJ2IjoiMSJ9.W59lGHutZaTZngJQYraymfs0k8X2anvXFBScC4QDzhi5HEg3m7pFL0M-_tYKucn76Mcm65QcjWwvZmc0LDDwRZchtjd_UQ16bZ6h2X_Tpcua1KwS00DQjirIHsD-3lsOFmvF6n5zT2_MaXvzlBy5jy6tOCVEvGgEWCQk8kE6eDpXEjXOUn8R8xZ9b6KxK961HkcyMNalgAO3CIxvGnKEdCHTIEc_nWQvGvnAmcvV5dTaXQMYlmx0WTzUw83ayhkf5rn0HXiIBhV5OmJnEd1xySwWHd6jl01vNF0stivYCaY.S30jDwF7MTORh8Rn-Agu1v_KUqc85zzu3gDuYiZV_VA&dib_tag=se&keywords=the+cheat+sheet&qid=1733412942&sprefix=the+cheat+s%2Caps%2C313&sr=8-1"
          },
          {
            id: "when-in-rome",
            titulo: "When in Rome",
            descricao: "Inspirada pela música de Audrey Hepburn, uma estrela pop encontra o amor verdadeiro em uma pequena cidade.",
            imagem: "https://m.media-amazon.com/images/I/81MJeRCwTIL._SY425_.jpg",
            link: "https://www.amazon.com.br/When-Rome-charming-rom-com-sensation-ebook/dp/B09QYM92KH/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YVUSUD6P0R7Z&dib=eyJ2IjoiMSJ9.je1Fc-O_U5Oyuie9HD44VZDF9D8ERmgsuc_tn_p1fexE-xlclc7cve10dr5_Hx3UB0zXaH55Fs9aOFrvEEPMJa8r_hoUcfflIofbn14PhlyJoUqRmR7sXS_KdH3mPipUJNSsqbkEs3FdEgL6nCjj9gg0fjC6NF0TOUX4BgMb73vD_Gyh01Cu2jQK7oUMkbJocetLVsO9ylyI5yhzPNg_fEXvoIM6NK9QILYEhoFc1_RXyvPJxwmUXeZIe7DdwqIZkGO4QiB6AFimvMCQrhb9wixZx5K-JgmlDpoCJHsQOYU.RSff66yKiUgJbLIQ43W6_WkCmWwRfFc2YEMn2uu0u90&dib_tag=se&keywords=when+i+rome&qid=1733412916&sprefix=when+i+%2Caps%2C289&sr=8-1"
          },
          {
            id: "practice-makes-perfect",
            titulo: "Practice Makes Perfect",
            descricao: "Uma florista tímida busca ajuda de um bad boy para praticar seu lado romântico e acaba descobrindo o amor.",
            imagem: "https://m.media-amazon.com/images/I/51VcIAOxbuL._SY445_SX342_.jpg",
            link: "https://www.amazon.com.br/Cheat-Sheet-Novel-English-ebook/dp/B09Q6K3BV7/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.Rbvi6KEEgvFESK5GGYRGwIMW8zlw_9Ne9xlUV8hr2V2TGFqojvxxmfyIMcu9dx2TZoyL2TccmPSlq7UtAqqWSUoqlGGGhsLUwhW3lhu7mQ2OFH6uizafIJqdmT6R0gfLLGT2fQK-mLWhFI9k9STue9VTebmjgDOJMcKT5unrn0WxFcvDQ9YbxDbA8p8lv7KfpzJfT3gplDo3biKZWFPy6VLzzVnPVLD3w3J5c8QtUZZc7EyOm-tgFp6G1oEoyMScQmjKMw-RILQUkvTbH_DJu0oI_JjQFsO68nfiAmXZBQffDgGwwJ.GAbHbpTsjXBxK1F5sdKMiCPptqMI_Wbo8qiCL_6gd7s&dib_tag=se&keywords=practice+makes+perfect&qid=1733413200&sprefix=when+i+rome+practice%2Caps%2C249&sr=8-2"
          }
        ]
      },

      {
        id: "livros-collen-1",
        titulo: "Collen Hover",
        autor: autores[3],
        livros: [
          {
            id: "verity",
            titulo: "Verity",
            descricao: "Lowen Ashleigh é contratada para terminar os livros de uma autora famosa, mas descobre segredos sombrios em sua casa.",
            imagem: "https://m.media-amazon.com/images/I/91SDZ2eUj+L._SY342_.jpg",
            link: "https://www.amazon.com.br/Verity-Colleen-Hoover/dp/8501117846/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=15KKGLOCWS06Y&dib=eyJ2IjoiMSJ9.WSo6UanQzlr7jZF7D8KPVMsLo69rnu6nkVSUJf433-Onas8XNhd3KR5rUu0h2LZUf_hk6NT9ePWLctt4ElypwIruurHRdXp6uxOsNGY5JMd-BeRavkE0-E_2uDClx6N1nFHQMi0JSDsgeKAsrUFQjP6okSTeUwunzMJfLzjNNPX8PXUvEinFgrEa4V5wgodUDV5MLLd85g1vyehLV7fGjIgxrk4kwHW0gr6WENUGnqCeMjVq2J7X0HCc_fYCA_gWn5YG0qGkOdPKAJ-TdUrS3pnMRyLy5fbBkDSnks_B2Fc.rXgi6pNTC_1BmKuRBu9F0rAtUGlgvaHSQrw6G9LZI14&dib_tag=se&keywords=verity&qid=1733413161&sprefix=veri%2Caps%2C605&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9"
          },
          {
            id: "ugly-love",
            titulo: "Ugly love",
            descricao: "Um romance emocionante entre Tate e Miles, que revela os altos e baixos do amor verdadeiro.",
            imagem: "https://m.media-amazon.com/images/I/41mBCtaJ1XL._SY445_SX342_.jpg",
            link: "https://www.amazon.com.br/Ugly-Love-English-Colleen-Hoover-ebook/dp/B00HB62MC0/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2AEUPB14000R2&dib=eyJ2IjoiMSJ9.FY-YAevpeNfIi8z41OWQ216_xSrdUvwgZAZfDRnIli9r8L8_vbT2WubC89-6h6Tz23VLxmFNguuNjkJKyR9dPHs7Y-MkuVNlFeFnSMaU41iYXtKU8ZcFeLIgrSWgkMIb1UtysTWpqQ_3F31HUKzqi_7ySjREq32XGGfM5qnk3-0dmrvJ9vM8YXoETeNtWphDefTI5luhZeUJ6kW5nF4Xe4Wb1T_olJMiDdIz5kiQKBBOZLY2aQG-YIw-Ybh45hOV4Lcm2vcSrCxPHMCwmSZ__HgjcQFkEXSkageDRR_Em_k.uL3nzi2baTVzHK4L09gFKYFlZPeSzdygTBphBqZRt1A&dib_tag=se&keywords=ugly+love&qid=1733413224&sprefix=ugly+lo%2Caps%2C456&sr=8-1"
          },
          {
            id: "All-your-perfects",
            titulo: "All Your Perfects",
            descricao: "Quinn e Graham enfrentam os desafios de um casamento com problemas e lutam para superar as dificuldades do passado e do presente.",
            imagem: "https://m.media-amazon.com/images/I/71L5vWJf6JL._SY342_.jpg",
            link: "https://www.amazon.com.br/All-Your-Perfects-Novel-English-ebook/dp/B078MC547V/ref=sr_1_1?crid=2EW7QP9N7HZ9L&dib=eyJ2IjoiMSJ9.11_lp89A-y0_ewaARlFmmFSGaj3T9vgHwBuw4aK8K7unYEqO1-pPPlzFz5zlbJaUagFdqaAK8ZuqEwxpDl5SjjzGdDL22rxMGdGjV6cZFO1pezphi0dgvhv5VABR7oRzfSWTkooIT2G2933d5mttPXJ7jsWelFegoID439zaew9HCDQAyTj38ZPqhgb0boH90kbw9DODQkZdTCLLDtDKNTyGvWuLOc27LUKoqc3lZh8SNzymh3Nct5xR_bMTDGa4YLVdMACjzwiRUYxYupw7oY8iWYIFS1N1yHmWkxALpN8.ZzTbTamBXcHH0CFIghXlwgLZs-I8fI6V3E7GxBJ3Jao&dib_tag=se&keywords=all+your+perfects+colleen+hoover&qid=1733413499&sprefix=all+your+per%2Caps%2C307&sr=8-1"
          }
        ]
      },
      {
        id: "livros-Rachael",
        titulo: "Rachael",
        autor: autores[4],
        livros: [
          {
            id: "five-feet-apart",
            titulo: "Five Feet Apart",
            descricao: "Dois adolescentes com fibrose cística se apaixonam, mas precisam manter uma distância de cinco pés para não se infectarem.",
            imagem: "https://m.media-amazon.com/images/I/81a7480-s9L._SY385_.jpg",
            link: "https://www.amazon.com.br/Five-Feet-Apart-Rachel-Lippincott/dp/1471182312/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.Ix8ACJ4Noe9tnAlmLBqlOWLxNvtpxyE7XslaTqFuXeLIvpurYTTgMp5_K1nQQFTQoixFZUkZGAKfcD9MF5E-P-NGJHdp9y2VbuZmUo58r6Q9io732X654BBFpUHRA73xp34eF2EEm3O8uefMlp-dhB6CQQpmcylwuB_rUC20gWdf83ACuavNQLJVc0QrGEh5uyxWYl26j4silmfmvwwgyeQGZyBwweB7mx5VMLFLUV8DUH6olBVM5IHJJElEIoPtN7OQI-E0bFAL7nIpsKJ_Lkj7OYJdnC0ASR-8ry07y80.0hgrhI6xRk8GbH4uYuDQEx9FtX-IPKWLPq4MR9aWbOU&qid=1733413691&sr=8-1"
          },
        ]
    }, 
    {
        id: "livros-casy",
        titulo: "Casy",
        autor: autores[7],
        livros: [
          {
            id: "red-white-and-royal-blue",
            titulo: "Red, White & Royal Blue",
            descricao: "O romance conta a história de Alex Claremont-Diaz, filho da presidente dos Estados Unidos, e de Henry, príncipe da Inglaterra, que acabam se apaixonando, o que gera uma grande reviravolta na política e nas vidas deles.",
            imagem: "https://m.media-amazon.com/images/I/41rWJAGUMgL._SY445_SX342_.jpg",
            link: "https://www.amazon.com.br/White-Royal-Blue-Casey-McQuiston/dp/8381691680/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3L9NT5X71UP8W&dib=eyJ2IjoiMSJ9.FEfbIO9rk2_ataA7ZF5m9otuVrkrejctFUEwsAiGE9A9oWIjKlVW0MsD5c-cT61wKCtB-nETaMCHb63lD38m_SwA-IWW9bF4O4BIcA5Rt2iFJ1g5GP4VQrrzT1rXYjMHULhIYe4NwgWWWhU2SqOG8gvEA8r2QxC7dvsAWhN7Dn-jw5l35hFtSgql0_RdqF8LQAgbgN72E4qO3CD-fGUJJH4bGLsoa4533pDBqHCv7uY.HwOQ11UH8TBvZAsLYclleQ9qusBNsjXkoeW2XSpvmlM&dib_tag=se&keywords=Red%2C+White+%26+Royal+Blue&qid=1733414188&s=books&sprefix=they+both+die+at+the+end%2Cstripbooks%2C835&sr=1-2&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12"
          },
          {
            id: "one-last-stop",
            titulo: "One Last Stop",
            descricao: "August, uma jovem que se muda para Nova York, acaba se apaixonando por uma mulher misteriosa que viaja no metrô todas as noites. Mas o que ela não sabe é que a mulher é uma viajante no tempo.",
            "imagem": "https://m.media-amazon.com/images/I/7125eYIFBxL._SY385_.jpg",
            link: "https://www.amazon.com.br/Last-Stop-English-Casey-McQuiston-ebook/dp/B08FZB4B6F?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.QxLuOXwtCDMZJrNFxUbNr6hFwkxpY2hlFdgiAOQcUygKDpHELhjk-Ci7eDxKi196q6FQm_LbdlenlUZL-43Ko0aPP_uq1Ih8ZXc9gyFRxO4_6AU9q9uYSeJxf7ka2lH-pOArN-153gcohnBn4hbUg5B65dAoVPOnuq83mXauDyFPaGjRASVsQ9x-2Vk0-jrVvrpkTDGgfBtC_tk8HI621IAVlEDvQVhJh4Osx32PLrM.yF0QNWjqTXhffpRnJpAN1clrKvKhnbf1nNOAfOjDBn8&dib_tag=AUTHOR"
          },
          {
            id: "i-kissed-shara-wheeler",
            titulo: "I Kissed Shara Wheeler",
            descricao: "Shara Wheeler, uma estudante popular, desaparece de repente, e três jovens vão em busca de pistas para entender o que aconteceu com ela, enquanto lidam com suas próprias descobertas pessoais.",
            imagem: "https://m.media-amazon.com/images/I/71ECQBT904L._SY385_.jpg",
            link: "https://www.amazon.com.br/Kissed-Shara-Wheeler-Novel-English-ebook/dp/B09CHCFFFL?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.QxLuOXwtCDMZJrNFxUbNr6hFwkxpY2hlFdgiAOQcUygKDpHELhjk-Ci7eDxKi196q6FQm_LbdlenlUZL-43Ko0aPP_uq1Ih8ZXc9gyFRxO4_6AU9q9uYSeJxf7ka2lH-pOArN-153gcohnBn4hbUg5B65dAoVPOnuq83mXauDyFPaGjRASVsQ9x-2Vk0-jrVvrpkTDGgfBtC_tk8HI621IAVlEDvQVhJh4Osx32PLrM.yF0QNWjqTXhffpRnJpAN1clrKvKhnbf1nNOAfOjDBn8&dib_tag=AUTHOR"
          },
        ]
      }
];

export default livros; 