import React from 'react'
import { Link } from 'react-router-dom'

const Teamsection = () => {
  return (
    //  <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title">
          <span>Team</span>
          <h2>Team</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img loading='lazy' src="assets/img/team/team-1.jpg" alt="" />
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>
                Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
              </p>
              <div class="social">
                <Link href=""><i class="bi bi-twitter"></i></Link>
                <Link href=""><i class="bi bi-facebook"></i></Link>
                <Link href=""><i class="bi bi-instagram"></i></Link>
                <Link href=""><i class="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img loading='lazy' src="assets/img/team/team-2.jpg" alt="" />
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
              </p>
              <div class="social">
                <Link href=""><i class="bi bi-twitter"></i></Link>
                <Link href=""><i class="bi bi-facebook"></i></Link>
                <Link href=""><i class="bi bi-instagram"></i></Link>
                <Link href=""><i class="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img loading='lazy' src="assets/img/team/team-3.jpg" alt="" />
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
              </p>
              <div class="social">
                <Link href=""><i class="bi bi-twitter"></i></Link>
                <Link href=""><i class="bi bi-facebook"></i></Link>
                <Link href=""><i class="bi bi-instagram"></i></Link>
                <Link href=""><i class="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Teamsection