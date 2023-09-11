<!--
    Contact Page
-->
<template>
    <main>
        <main>
          <PageTitle title="Contact Us" description = "Welcome to our contact page!" />
          <div id="information">
            We are thrilled to hear from you and we are here to help in any way we can.
            <br><br>
            To get in touch with us, please fill out the contact form below or use the contact information provided.
            <br><br>
            Please feel free to contact us with any inquiries or feedback you may have. We will do our best to get back to you as soon as possible. Thank you for your interest!
          </div>
          <div id="office">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5272048825886!2d9.230325779402145!3d45.47932727115789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f67c76510f%3A0x52a5c69d1962b716!2sDipartimento%20di%20Elettronica%2C%20Informazione%20e%20Bioingegneria!5e0!3m2!1sit!2sit!4v1694369714787!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div id="address">
              <h3 id="office-title">CYZ Summer School Office</h3>
              <ul>
                <li>E-mail: <a href="mailto:summerschool@cyz.it">summerschool@cyz.it</a></li>
                <li>Tel: (+39) 02 12345678</li>
                <li>Address: <br>Via Giuseppe Ponzio 34, <br>20133 Milano</li>
              </ul>
            </div>
          </div>

          <p id="look-forward">We look forward to hearing from you!</p>

            <form class="contact-form">
                <div>
                    <label for = "name">Name & Surname</label>
                    <input type = "text" id = "name" placeholder = "Name & Surname">
                </div>
                <div>
                    <label for = "mail">E-mail</label>
                    <input type = "email" id = "mail" placeholder = "E-mail">
                </div>
                <div id = "message-div">
                    <label for = "message">Message</label>
                    <textarea id = "message" placeholder = "Write your message here"></textarea>  
                </div>
                <button id = "contact-us-button" type = "submit" @click = "submitForm">Send Message</button>
            </form>
        </main>
    </main>
</template>

<script setup>

  /* Head: title, site_name */
  useHead({
    title: "Contacts - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: "This is the Contact Page of CYZ Summer School"
      },
      {
        name: "site_name",
        content: "CYZ Summer School"
      }
    ]
  })

  function submitForm() {
    alert('Message sent successfully')
  }
</script>

<style>
    main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    }

    .contact-form {
        margin-top: 40px;
        width: 60%;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border: 2px rgb(10, 5, 77) dashed;
        border-radius: 5px;
        row-gap: 30px;
    }

    .contact-form div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .contact-form input {
      min-height: 20px;
      width: 50%;
      font-size: 13pt;
    }

    .contact-form textarea {
        width: 99%;
        min-height: 6em;
        resize: vertical;
        margin-top: 10px;
        font-family: Arial, sans-serif;
        font-size: 13pt;
    }

    label {
        font-size: 14pt;
        font-weight: bold;
    }

    #message-div {
        flex-direction: column;
    }

    #information {
      margin-top: 20px;
      margin-left: 20%;
      margin-right: 20%;
      font-size: 15pt;
    }

    iframe {
      margin-top: 50px;
      float: left;
      margin-left: -10%;
      width: min(60vw,400px);
      height: min(40vh, 300px);
    }

    #address {
      margin-top: 90px;
      float: right;
      font-size: 14pt;
    }

    #address li {
      margin-top: 10px;
    }

    #office-title {
      margin-left: 20px;
    }

    #address a{
      color: #022338;
      font-weight: bold;
      text-decoration: underline;
    }

    #look-forward {
      margin-top: 80px;
      font-size: 20pt;
      font-weight: bold;
      color: #192B59;
    }

    #contact-us-button {
      align-self: center;
      width: 30%;
      font-size: 14pt;
      font-family: "Century Gothic", sans-serif;
      border: 2px solid lightgray;
      padding: 9px 0 9px 0;
      color: #192B59;
      transition: all .5s;
      cursor: pointer;
    }

    #contact-us-button:hover {
      background-clip: padding-box;
      background-color: #9facbb;
      color: #192B59;
    }

    @media screen and (max-width: 800px) {
        .contact-form div {
            flex-direction: column;
        }

        #office {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        iframe　{
          float: unset;
          margin-left: auto;
        }

        #address {
          float: unset;
          margin-top: 20px;
        }

        .contact-form input {
          width: 99%;
          margin-top: 10px;
          min-height: 20px;
        }

        #look-forward {
          margin-left: 0;
          margin-top: 50px;
        }
        
        .contact-form {
            width: 80%;
        }

        .contact-form textarea {
          width: 99%;
          margin-top: 10px;
          min-height: 130px;
        }
    }
</style>