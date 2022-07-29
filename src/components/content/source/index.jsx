import warrior from "../../../assets/warrior.gif";

export const Source = () => {
  return (
    <div className="source">
      <div className="source-wrapper">
        <div className="source-wrapper-title">
          <p>Ресурсы откуда взята вся информация: </p>
        </div>
        <div className="source-wrapper-items">
          <ul>
            <li>
              <a
                href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0"
                target="_blank"
              >
                Wikipedia
              </a>
            </li>
            <li>
              <a href="https://e-history.kz/ru/news/show/4288/" target="_blank">
                Qazaqstan Tarihy
              </a>
            </li>
          </ul>
        </div>
        <div className="source-person">
          <img src={warrior} />
        </div>
      </div>
    </div>
  );
};
