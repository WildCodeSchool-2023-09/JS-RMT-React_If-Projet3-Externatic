import React from "react";
import { useLoaderData } from "react-router-dom";

import AllJobs from "../components/AllJobs";
import Collapser from "../components/Collapser";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

import "./AllJobsPage.css";
import FiltersBar from "../components/FiltersBar";

function AllJobsPage() {
  const allJobsData = useLoaderData();
  const { jobs, totalPagesNb } = allJobsData.data;
  const currentPage = allJobsData.page;

  return (
    <div className="all-jobs-page-body">
      <h2>Vos opportunités d'emploi</h2>
      <div className="filters-search-bar">
        <FiltersBar />
        <SearchBar page="job" />
      </div>
      <AllJobs jobs={jobs} />
      <Pagination pageNb={totalPagesNb} currentPage={currentPage} />
      <div className="all-jobs-page-separator" />
      <div className="all-jobs-page-tutorial">
        <h2 className="all-jobs-page-tutorial-title">
          Une fois que j'ai postulé que se passe t'il?
        </h2>
        <Collapser
          title="1 - Je rencontre le consultant en premier entretien"
          content="Votre candidature est top, elle correspond pile à ce que l'on recherche, on va donc vous rencontrer pour un premier entretien, dans la semaine qui suit le traitement de votre candidature.
          Lors de l’entretien , nous allons parler de vous, vos compétences, vos envies, votre projet… L’objectif sera de vous comprendre pour trouver le poste et l’environnement qui vous correspond."
        />
        <Collapser
          title="2 – Ma candidature est envoyée"
          content="Nous allons ensuite envoyer votre CV ainsi que nos observations recueillies lors de l’entretien à l’entreprise en recherche. Nous lui présentons vos forces et les choses qui ne se voientt pas forcément sur CV. À ce moment, vous bénéficiez de la relation de confiance que nous avons avec les entreprises, qui ont un bon a priori sur vous lorsque la recommandation vient de nous."
        />
        <Collapser
          title="3 – Le process démarre"
          content="
Vous rencontrez l’entreprise et démarrez leur process de recrutement. Chaque process est différent mais nous restons à vos côtés. Avant de le démarrer, nous vous donnons toutes les informations (fiches de postes, attendus, spécificités de l’entreprise, du recruteur…). Pendant le process, nous débriefons ensemble vos entretiens, nous recueillons les impressions de l’entreprise et nous vous conseillons tout du long."
        />
        <Collapser
          title="4 – J’ai une proposition"
          content="
Le process s’est bien passé, c’est au tour de l’entreprise de vous faire une proposition. À vous maintenant de peser les pour et contre et de faire votre choix. Si jamais l’entreprise ne souhaite pas continuer le process avec vous, nous débriefons ensemble les raisons pour pouvoir en tirer un apprentissage ! Même si ça n’a pas fonctionné avec cette entreprise, ce n’est pas fini entre nous. Nous gardons votre profil dans notre base pour le proposer à nouveau."
        />
        <Collapser
          title="5 – Je commence dans l’entreprise"
          content="
Vous avez accepté, vous allez donc pouvoir démarrer, félicitations ! On reste en contact lors de votre entrée dans l’entreprise pour s’assurer que tout se passe bien."
        />
        <Collapser
          title="6 -  On reste en contact"
          content="
Ce n’est pas parce que vous démarrez que l’on n’est plus en contact ! Si vous connaissez des profils avec lesquels nous pourrions collaborer, vous pouvez les coopter et si, plus tard, vous changez à nouveau d’emploi, nous pouvons retravailler ensemble."
        />
      </div>
    </div>
  );
}

export default AllJobsPage;
