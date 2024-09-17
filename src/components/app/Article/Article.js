import React from "react";
import StudyImg from "../../../assets/images/study.jpg";

const Article = ({ handleBack }) => {
  const articleContent = `<div id="lipsum">
<p class="mb-5 text-justify">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac felis dictum, rutrum tortor sit amet, interdum nulla. Aenean quis pretium dui, nec vestibulum justo. In pellentesque gravida dolor, a pellentesque ipsum condimentum in. Pellentesque non est volutpat ante ultricies ullamcorper. Curabitur eu diam neque. Nulla eu fermentum diam, non commodo neque. Sed ac vehicula erat. Integer neque dui, vestibulum id lacus ut, auctor eleifend massa. Nam venenatis sagittis laoreet. In tristique elit id mi molestie faucibus. In pulvinar augue vitae tortor luctus cursus in quis tortor. Maecenas interdum dapibus libero, et varius massa sollicitudin nec. Duis sit amet erat ac sem congue porta sed quis orci. Duis iaculis massa a leo tristique aliquet. Curabitur odio massa, suscipit vel laoreet nec, consectetur pellentesque ex. Proin mattis diam vel suscipit fringilla.
</p>
<p class="mb-5 text-justify">
Quisque elementum arcu dignissim ligula pellentesque fermentum. Donec ornare scelerisque pulvinar. Donec ac nisl ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec dui sem. Cras sit amet nisl eu urna dignissim ornare et eu massa. Phasellus pulvinar consectetur justo eget auctor. Praesent tempor velit at dictum egestas. Fusce odio neque, maximus nec ipsum a, hendrerit imperdiet nibh. Donec sed neque consequat, ullamcorper arcu sed, feugiat orci. Etiam eget eros ut quam tincidunt pulvinar. Maecenas ac purus elit. Donec commodo gravida augue ut tempus. Suspendisse tortor ante, euismod ac velit non, commodo blandit dui. Vivamus tristique pulvinar dolor eu vulputate.
</p>
<p class="mb-5 text-justify">
Mauris eget turpis eu lectus convallis pulvinar sed at lorem. Morbi ut feugiat ante. Nullam in enim lacus. Maecenas sit amet metus pharetra, rhoncus tortor vel, tristique lorem. Morbi viverra, mauris at bibendum egestas, nisl odio posuere odio, eget auctor lectus mi a nibh. Cras aliquam nec sapien a fringilla. Nulla ut ipsum consectetur, vulputate risus quis, lacinia augue. In dolor velit, sodales eu commodo a, imperdiet ac lorem. Suspendisse in velit ac sapien pulvinar suscipit. Quisque vel felis diam. Nunc faucibus viverra leo ut porttitor.
</p>
<p class="mb-5 text-justify">
Aliquam et efficitur lorem, ac viverra enim. Proin pretium eros sit amet magna lobortis posuere. Aenean tincidunt, purus non sollicitudin dictum, lorem nisi porttitor sapien, vitae congue dolor diam quis magna. Nullam at consequat neque, eget consectetur elit. Donec eu massa non felis ultrices sollicitudin. Donec sollicitudin tempus semper. Aenean laoreet condimentum urna, nec semper quam ultrices ac. Cras suscipit ante ipsum, nec molestie purus tincidunt venenatis. Sed maximus felis quis efficitur commodo. In ultrices nec nulla non blandit. Quisque fringilla dui in dui ultrices interdum. Duis sed posuere nisl, rutrum commodo purus.
</p>
<p class="mb-5 text-justify">
Suspendisse mattis neque vulputate aliquam accumsan. Morbi interdum volutpat porta. Curabitur nec aliquet elit. Phasellus finibus rutrum tortor, vitae blandit lacus pretium ac. Quisque malesuada mauris vel posuere vehicula. Phasellus ligula urna, accumsan in diam ac, laoreet interdum libero. Duis euismod tincidunt nisl quis tristique. Ut ut felis non enim aliquet pulvinar. In arcu orci, euismod eu ligula quis, euismod venenatis eros.
</p></div>`;

  return (
    <div className="w-full">
      <button className="mb-5 text-left" onClick={handleBack}>
        <i className="fa-solid fa-arrow-left me-3"></i>
        <span>Back</span>
      </button>
      <img src={StudyImg} alt="study" className="w-full h-3/4 object-cover" />
      <p className="text-red-500 text-sm uppercase mb-3 mt-4">
        Trending in Indonesia
      </p>
      <h1 className="text-5xl font-medium mb-3 text-white">
        Seriously, you need to start developing new applications to increase
        your skill
      </h1>
      <p className="text-slate-500 mb-3">John Doe - 24 March 2022</p>
      <p
        className="text-slate-400"
        dangerouslySetInnerHTML={{ __html: articleContent }}
      ></p>
    </div>
  );
};

export default Article;
