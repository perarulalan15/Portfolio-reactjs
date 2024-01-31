export default function Projects() {
  return (
    <section id="project">
      <div className="projects-section-content-box">
        <div className="project-section-content">
          <h1 className="project-section-title">Projects</h1>
        </div>
        <div className="project--section--container--box">
          <div className="project-section-box">
            <div className="project--section--inside--box">
              <img src="./img/horse.png" alt="horse" className="project--img"/>
            </div>
            <h3 className="project--section--heading">Horse Health Prediction</h3>
            <p className="project--section--description">This project is aimed at predicting the health of horses using machine learning algorithms and deploying the model in a Streamlit and Django web application.</p>
            <a href="https://github.com/perarulalan15/Horse_health_prediction" className="project--section--links-1">View In Github <svg className="project-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#30D85B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
          </div>
          <div className="project-section-box">
            <div className="project--section--inside--box">
              <img src="./img/ckd.webp" alt="horse" className="project--img"/>
            </div>
            <h3 className="project--section--heading">Chronic Kidney Disease Prediction</h3>
            <p className="project--section--description-c">This project focused on predicting chronic kidney disease using Machine Learning techniques. The goal is to develop a model that can accurately diagnose the presence of kidney disease based on relevant medical data.</p>
            <a href="https://github.com/perarulalan15/chronic-kidney-disease" className="project--section--links-2">View In Github <svg className="project-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#30D85B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
          </div>
          <div className="project-section-box">
            <div className="project--section--inside--box">
              <img src="./img/churn.webp" alt="horse" className="project--img"/>
            </div>
              <h3 className="project--section--heading">Customer Churn Prediction</h3>
              <p className="project--section--description">This aims to forecast customer churn, It involves developing a predictive model that can identify customers who are at risk of churning, allowing businesses to take proactive measures to retain those customers.</p>
              <a href="https://github.com/perarulalan15/customer-churn-prediction" className="project--section--links-3">View In Github <svg className="project-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#30D85B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}