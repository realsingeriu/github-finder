function About() {
  return (
    <div className="flex max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="w-3/4">
        <h1 className="text-6xl mb-4 font-bold text-gray-800">Github Finder</h1>
        <p className="mb-4 text-2xl font-light text-gray-600">
          깃허브 사용자를 찾고 프로파일을 확인할 수 있는 리액트 앱입니다. 참고
          할만한 블로그 주소 링크
        </p>
        <p className="text-lg text-gray-400 mb-4">
          Version <span className="font-bold">1.0.0</span>
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            <i>
              <strong>
                <a
                  href="https://blog.naver.com/drv983"
                  className="text-blue-500 hover:underline"
                >
                  jbkim 블로그 링크
                </a>
              </strong>
            </i>
          </li>
          <li>
            <i>
              <strong>
                <a
                  href="https://blog.naver.com/coding_ori"
                  className="text-blue-500 hover:underline"
                >
                  keangEE 블로그 링크
                </a>
              </strong>
            </i>
          </li>
          <li>
            <i>
              <strong>
                <a
                  href="https://blog.naver.com/realsingeriu12"
                  className="text-blue-500 hover:underline"
                >
                  realsingeriu 블로그 링크
                </a>
              </strong>
            </i>
          </li>
        </ul>
        <div>
          <p className="text-gray-600">
            <strong>Contact Me:</strong>{" "}
            <a
              href="mailto:realsingeriu12@naver.com"
              className="text-blue-500 hover:underline"
            >
              <spnan>realsingeriu12@naver.com</spnan>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
