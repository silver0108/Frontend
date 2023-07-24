import styled from 'styled-components';

const Writing = () => {
  
  return (
    <WritingWrapper>
      <h3 style={{textAlign:"center"}}>
        재능 공유 글쓰기
      </h3>
      
      <St.WritingContainer>
        <St.WritingBox>
          <St.WritingSection>
            <St.WritingHeader>
              글 제목을 작성해주세요.
            </St.WritingHeader>
            <St.WritingInput placeholder=
            '예시) 자유롭게 영어로 대화할 수 있는 즐거운 영어교실'>
            </St.WritingInput>
          </St.WritingSection>

          <St.WritingSection style={{ flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}>
            <St.WritingHeader>
              최대 정원을 정해주세요.
            </St.WritingHeader>
            <div style={{ 
              display:"flex", 
              border: "0.01rem solid #E6E6E6",
              backgroundColor: "white",
              padding: "0.2rem 0.5rem",
              alignItems:"center",
              borderRadius:"1rem"
              }}>
              <St.CountButton>
                -
              </St.CountButton>
              <div style={{margin:"0 0.6rem"}}>
                3
              </div>
              <St.CountButton>
                +
              </St.CountButton>
            </div>
          </St.WritingSection>

          <St.WritingSection>
            <St.WritingHeader>
            재능 공유 카테고리를 골라주세요.
            </St.WritingHeader>
            <div>
              <St.RadioBoxInput/>
              <St.RadioBoxLabel>
                <St.RadioBoxSpan>
                  운동  
                </St.RadioBoxSpan>  
              </St.RadioBoxLabel>

              <St.RadioBoxInput/>
              <St.RadioBoxLabel >
                <St.RadioBoxSpan>
                  언어  
                </St.RadioBoxSpan>
              </St.RadioBoxLabel>

              <St.RadioBoxInput/>
              <St.RadioBoxLabel>
                <St.RadioBoxSpan>
                  음악
                </St.RadioBoxSpan>  
              </St.RadioBoxLabel>

              <St.RadioBoxInput/>
              <St.RadioBoxLabel >
                <St.RadioBoxSpan>
                  미술
                </St.RadioBoxSpan>
              </St.RadioBoxLabel>

              <St.RadioBoxInput/>
              <St.RadioBoxLabel>
                <St.RadioBoxSpan>
                  기타
                </St.RadioBoxSpan>  
              </St.RadioBoxLabel>
            </div>
          </St.WritingSection>

          <St.WritingSection>
            <St.WritingHeader>
              재능 해시태그를 간단하게 달아주세요.
            </St.WritingHeader>
            <St.WritingInput placeholder=
            '예시)  #학원영어강사출신  #4~12세  #정원6명'>
            </St.WritingInput>
          </St.WritingSection>

          <St.WritingSection>
            <St.WritingHeader>
              수업 어필을 해주세요. (학습내용/경력 등)
            </St.WritingHeader>
            <St.WrtingTextArea
            placeholder='                    예시)&#10;
- 미국 하버드 출신의 스피킹과 라이팅, 영어의 모든 영역 지도
- 미국 교과서 수업(100% 영어로 진행)
- 누리 학원 9년 강사 출신'>
    </St.WrtingTextArea>
          </St.WritingSection>

          <St.WritingSection style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <St.WritingHeader>
              수업 가격을 작성해주세요.
            </St.WritingHeader>
            <St.WritingInput style={{width: "30%", height: "2.5rem", textAlign: "end"}}
            placeholder='10,000원'>
            </St.WritingInput>
            {/* <div style={{ height: "2.5rem", backgroundColor: "white"}}>
              <input placeholder='10,000' style={{width: "30%", textAlign: "end", border:"none"}}/>원
            </div> */}
          </St.WritingSection>
        </St.WritingBox>
        
        <St.WritingCompleteButton>
          작성 완료
        </St.WritingCompleteButton>
      </St.WritingContainer>
    </WritingWrapper>
  );
}

export default Writing;

const WritingWrapper = styled.div`
    width: 100%;
    heigth: 100%;
    margin: 0;
    
    display: flex;
    //justify-content: center;
    //align-items: center;
    flex-direction: column;
`;

const St = {
  WritingContainer: styled.div`
    //width: 100%;
    //heigth: 100%;
    
    display: flex;
    flex-direction: column;
    flex: 1;

    background-color: #F5F5F5;
  `,
  WritingBox: styled.div`
    //width: 100%;
    padding: 0 1rem;
  `,
  WritingSection: styled.div`
    margin: 0rem 0.6rem;
    margin-top: 0.8rem;

    display: flex;
    flex-direction: column;
  `,
  WritingHeader: styled.div`
    margin: 1rem 0;
    // font-size: 1.11rem;
    font-weight: bold;
  `,
  WritingInput: styled.input`
    height: 3rem;
    padding: 0 1rem;

    border: 0.1rem solid #E6E6E6;
    border-radius: 1rem;

    &::placeholder {
      font-size: 0.77rem;
    }
  `,
  WrtingTextArea: styled.textarea`
    height: 7rem;
    padding: 1rem 1rem;
      
    border: 0.1rem solid #E6E6E6;
    border-radius: 1rem;

    resize: none;

    &::placeholder {
      font-size: 0.8rem;
    }
  `,
  CountButton: styled.button`
    width: 1.3rem;
    height: 1.3rem;

    border: none;
    border-radius: 50%;

    &:active {
      // transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
  `,
  RadioBoxInput: styled.input.attrs({type: 'radio', name: 'category'})`
    position: absolute;

    clip: rect(0, 0, 0, 0);

    &:checked + label {
      background-color: violet;
      color: white;
    }
  `,

  RadioBoxLabel: styled.label`
    padding: 0 0.5rem;

    cursor: pointer;
  `,

  RadioBoxSpan: styled.span`
    padding: 0.3rem 0.7rem;
    
    border: 0.1rem solid #E6E6E6;
    border-radius: 50px;
    
    background-color: white;
    color: gray;

    font-size: 0.8rem;

    cursor: pointer;
  `,

  WritingCompleteButton: styled.button`
    height: 3rem;
    margin: 1rem;

    border: none;
    border-radius: 1rem;
  
    font-size: 1.11rem;
    font-weight: bold;

    &:active {
      // transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
  `,
}