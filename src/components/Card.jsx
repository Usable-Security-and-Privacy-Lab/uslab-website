export function PlainCard(props) {
  return (
    <div className="w-full sm:max-w-xl sm:flex p-3 mt-10">
      {props.image && (
        <img
          className="w-32 h-32 rounded-full mr-8"
          src={"/images/" + props.image}
          alt={"Photo of " + props.name}
        />
      )}
      <div>
        <div className="text-gray-900 font-bold text-xl mb-2">
          {props.name}

          {props.pronouns && (
            <span className="rounded-full bg-gray-300 px-4 py-1 font-normal text-sm ml-2">
              {props.pronouns}
            </span>
          )}
        </div>
        {Instructor(props)}
        <div className="text-gray-700 mt-5">{props.children}</div>
      </div>
    </div>
  );
}

export function Card(props) {
  return (
    <div className="w-full sm:max-w-xl sm:flex shadow-lg p-3 border-t border-gray-200 mr-3">
      {props.image && (
        <img
          className="w-28 h-28 rounded-full mr-8"
          src={"/images/" + props.image}
          alt={"Photo of " + props.name}
        />
      )}
      <div>
        <div className="text-gray-900 font-bold text-xl mb-2">
          {props.name}

          {props.pronouns && (
            <span className="rounded-full bg-gray-300 px-4 py-1 font-normal text-sm ml-2">
              {props.pronouns}
            </span>
          )}
        </div>
        {Instructor(props)}
        <div className="text-gray-700 mt-5">{props.children}</div>
      </div>
    </div>
  );
}

export function Instructor(props) {
  if (!props.email) {
    return;
  }
  return (
    <div>
      {props.title && <span>{props.title}</span>}
      <br />
      {props.email && <span>{props.email}</span>}
      <br />
      {props.office && <span>{props.office}</span>}
      <br />
      {props.linked && <a href={props.linked}>LinkedIn</a>}
    </div>
  );
}
