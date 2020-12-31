<template>
  <section class="section container is-widescreen is-medium">
<!--
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">

        <section class="modal-card-body subscription-modal">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
              <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
              <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question">
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="question">
                No
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </section>

      </div>
    </div>
-->
    <div class="tile is-ancestor">

      <div class="tile is-parent">

        <article class="category tile is-child notification is-warning has-text-centered ">
          <img class="mt-5" src="@/assets/images/cbd-oil.svg" width="52" height="52" alt="none">
          <p class="title has-text-weight-normal">Sign-up for our subscription box<br class="is-hidden-touch">  and save 10% on your first curated order.</p>
          <!-- <p class="has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
          <div class="mb-5 content">
            <!--
            <a id="open-modal" href="" class="button is-danger">Sign Up</a>
            -->
            <a class="typeform-share button" href="https://form.typeform.com/to/HjuBSY5X?typeform-medium=embed-snippet"
               data-mode="popup" data-size="100" target="_blank">Sign-up </a>
          </div>
        </article>

      </div>

    </div>

  </section>
</template>

<script>
export default {
name: "subscription-cta",
  mounted() {

   // document.querySelector('a#open-modal').addEventListener('click', function(event) {
   //  event.preventDefault();
   //   var modal = document.querySelector('.modal');  // assuming you have only 1
   //   var html = document.querySelector('html');
   //   modal.classList.add('is-active');
   //   html.classList.add('is-clipped');

   //   modal.querySelector('.modal-background').addEventListener('click', function(e) {
   //     e.preventDefault();
   //     modal.classList.remove('is-active');
   //    html.classList.remove('is-clipped');
   //   });
   // });
  }
}
</script>

<style scoped>
.category {
  border-radius: 50px;
}

.subscription-modal {
  border-radius: 2rem;
}

.typeform-share {
  display: inline-block;
  text-decoration:none;
  background-color:#3A7685;
  color:white;
  cursor:pointer;
  font-size:20px;
  line-height:50px;
  text-align:center;
  margin:0;
  height:50px;
  padding:0px 33px;
  border-radius:25px;
  max-width:100%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  font-weight:bold;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

</style>
