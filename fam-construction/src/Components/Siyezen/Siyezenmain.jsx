import React from 'react'
import '../Siyezen/Siyezen.scss'
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";
const Siyezenmain = () => {
  return (
    <div id='Siyezen'>
      <div className="siyezentop">
     <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656049_44.jpg" alt="FAM-Group-Construction-Siyezen" />
     </div>
     <div className="container">
     <Link to="/layiheler" class="btn"> <BsBoxArrowLeft />   GERI DÖN</Link>
     <hr />
      <div className="row g-4">
        <h4>Siyəzən rayonu ərazisində 30 metrəlik Ötürücü baza stansiyasının inşaası</h4>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656001_11.jpg" alt="FAM-Group-Construction-Siyezen" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656014_22.jpg" alt="FAM-Group-Construction-Siyezen" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656027_33.jpg" alt="FAM-Group-Construction-Siyezen" />
        </div>
        <div className="col-xl-3">
        <img src="https://famgroupconstruction.az/uploads/posts/2023-07/1690656049_44.jpg" alt="FAM-Group-Construction-Siyezen" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Siyezenmain
