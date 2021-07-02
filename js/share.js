const url = 'https://animalmbti-lovetype2.netlify.app/';

function setShare() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChile.alt;
  const shareTitle = '동물로 알아보는 연애유형 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page.result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'shareTitle',
        description: 'shareDes',
        imageUrl: 'shareImage',
        link: {
          mobileWebUrl: shareURL,
          WebUrl: shareURL,
        },
      },

      buttons: [{
          title: '결과 구경하기',
          link: {
            mobileWebUrl: shareURL,
            WebUrl: shareURL
          },
        },
      },
    ]
  });
}
