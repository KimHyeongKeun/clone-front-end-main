import styled from "styled-components";

export const ColumnDirectionFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QuestionListContainer = styled(ColumnDirectionFlexBox)`
   padding:  50px 370px;
`
export const QuestionListHeader = styled.div`
  font-weight: 600;
  font-size: 32px;
  border-bottom: 3px solid black;
  padding : 20px 0px;
`
export const QuestionListTable = styled.table`
  margin-top : 100px;
  width: 100%;
  border-top: 1px solid black;
  text-align: center;
  margin-bottom: 50px;
`
export const QuestionListTableRow = styled.tr`
  height: 40px;
`
export const QuestionListTableHeader = styled(QuestionListTableRow)`
  background-color: #EFF2F6;
  
`
export const QuestionListTableHeaderSmallItem = styled.th`
  width: 10%;
`
export const QuestionTableHeaderMiddleItem = styled.th`
  width: 25%;
`

export const QuestionListTableBodyRow = styled(QuestionListTableRow)`
  font-weight: bold;
  :hover{
    cursor: pointer;
    background-color: #EFEFEF;
    
  }
`
export const QuestionListTableBodyWriteTimestamp = styled.td`
  font-weight: normal;
  color: rgba(0,0,0,0.6);
`
export const EmptyListExpression = styled.div`
  height : 300px;
  display : flex;
  justify-content : center;
  align-items: center;
  color: gray;
  font-weight: bold;
`

export const QuestionPageButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`
export const QuestionPageButton = styled.div`
  font-weight: bold;
  color: white;
  background-color: #2E2E2E;
  padding: 8px 15px;
  
  :hover{
    cursor: pointer;
    background-color: #3E3E3E;
  }
`

export const QuestionListTablePageNumberButtonWrapper =  styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const PageNumberButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  color:  ${props => props.isCurrentPage ? 'black' : 'rgba(0,0,0,0.2)'} ;
  text-decoration:  ${props => props.isCurrentPage ? 'underline' : 'none'} ;
  font-weight: bold;
  :hover{
    cursor: pointer;
  }
`

export const QuestionEditorPageContainer = styled(ColumnDirectionFlexBox)`
  padding: 30px 200px;

`
export const QuestionEditorHeader = styled.div`
  font-weight: 600;
  font-size: 32px;
  border-bottom: 3px solid black;
  padding : 20px 55px;
`

export const QuestEditorTitleInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 30px 0px 15px 0px;
  font-weight: bold;
  border-color: rgba(0,0,0,0.4);
  border-radius: 5px;
  padding: 0px 10px;
`

export const HTMLSizeLimiter = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 10px 0px;
`
export const HTMLEditor = styled.div`
  width: 100%;
`
export const CurrentHtmlSizeSpan = styled.span`
  color: ${props => props.isExeed ? 'red' : 'black'} ;
`
export const MoveToListButton = styled(QuestionPageButton)`
  margin-right: 10px;
`


export const QuestionDetailContentWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 30px 0px;
  border-top: 1px solid rgba(0,0,0,0.2);
  border-bottom: 1px solid rgba(0,0,0,0.2);
`
export const QuestionDetailTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`
export const QuestionDetailTitle = styled.div`
  font-size: 30px;
`
export const QuestionDetailSide = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const QuestionDetailSideStatus = styled.div`
  margin-right: 15px;
`

export const QuestionDetailSideCreatedAt = styled.div`
  color: rgba(0,0,0,0.4)
`

export const QuestionDetailViewer = styled.div`
  margin: 20px 0px;
`

export const QuestionDetailActionWrapper = styled.div`
  display: flex;
  justify-content: end;
  font-weight: bold;
`
export const QuestionDetailActionButton = styled.div`
  :hover{
    cursor: pointer;
    color: #111111;
    opacity: 0.6;
  }
`
export const QuestionDetailActionDivider = styled.div`
  margin : 0px 5px;
`

export const QuestionDetailPageButtonWrapper = styled(QuestionPageButtonWrapper)`
  margin-top: 15px;
`