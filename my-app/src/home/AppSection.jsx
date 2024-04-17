import React from 'react';
import { Link } from 'react-router-dom';
const btnText ="Sign Up for Free";

const title ="Shop AnyTime || From Any Place ";
const desc ="Continuse Your Shoping journey Through Our App Its make your Shopinhg easier"

const AppSection = () => {
  return (
    <div class="container py-5">
    <div class="text-center mb-4">
        <Link to="/sign-up" class="btn btn-primary mb-4">{btnText}</Link>
        <h2 class="title">{title}</h2>
        <p>{desc}</p>
    </div>

    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="lab-ul list-unstyled d-flex justify-content-between">
                <li class="mb-3">
                    <a href="#">
                        <img src="/src/assets/images/app/01.jpg" class="img-fluid" alt="" />
                    </a>
                </li>
                <li class="mb-3">
                    <a href="#">
                        <img src="/src/assets/images/app/02.jpg" class="img-fluid" alt="" />
                    </a>
                </li>
            </div>
        </div>
    </div>
</div>

   
  )
}

export default AppSection
