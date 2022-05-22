import React, {useRef, useState, useEffect, useLayoutEffect, createContext, useContext} from 'react'
import {DiLaravel} from 'react-icons/di'

import {Gitgraph} from '@gitgraph/react'

type UpdateSkill = {
  name: string
  icon: any
  useTerm?: string
}

type CommitMessage = {
  contexts: Array<string>
  updates?: Array<UpdateSkill>
}

const renderMessage = (commit) => {
  const commitMessage: CommitMessage = JSON.parse(commit?.body)

  return (
    <g transform = {'translate(0, ' + commit.style.dot.size + ')'}>
      <text 
        fill = {commit.style.dot.color} 
        alignmentBaseline = {'central'}
      >
        {commit.hashAbbrev + '-' + commit.subject}
      </text>
      <foreignObject 
        width={600} 
        x={15} 
        y={15}
        xmlns="http://www.w3.org/1999/xhtml"
      >
        <div>
          {commitMessage.contexts.map(context => <p key={Math.random()}> {context} </p>)}
          <div>
          {commitMessage.updates.map(updateSkill => (
            <p key={Math.random()}> {updateSkill.name} </p>
          ))}
          </div>
        </div>
      </foreignObject>
    </g>
  )
}
export default () => {
  return (
    <Gitgraph>
    {(gitgraph) => {
      const main = gitgraph.branch("main")
      main.commit("first commit")
      const student = main.branch("学生")
      student.commit("清風高等学校卒業")
      student.commit("大阪大学 基礎工学部 入学")
      student.commit("大阪大学 基礎工学部 卒業")
      student.commit("大阪大学大学院 基礎工学研究科 入学")
      student.commit("大阪大学大学院 基礎工学研究科 卒業")
      main.merge(student)
      const jobs = main.branch("jobs");
      jobs.commit("社会人スタート");

      const jobBrother = jobs.branch("brother");
      jobBrother.commit("ブラザー工業株式会社 入社");
      jobBrother.commit("ブラザー工業株式会社 退職");
      jobs.merge(jobBrother);

      const jobKhi= jobs.branch("khi");
      jobKhi.commit("川崎重工業株式会社 入社");
      main.commit("入籍");
      jobKhi.commit("川崎重工業株式会社 退職");
      jobs.merge(jobKhi);

      const jobSmaregi = jobs.branch("smaregi");
      jobSmaregi.commit("株式会社スマレジ 入社");
      const privateWork = jobSmaregi.branch("個人開発");
      privateWork.commit({
          subject: "TimLog開発",
          body: JSON.stringify({
            "contexts": ["tet", "and test"],
            "updates": [
              {"name": "laravel", "useTerm": "1year"}
            ]
          }),
          renderMessage: renderMessage
      });
      privateWork.commit("Look into Baskets開発");
      const subWorks = jobSmaregi.branch("複業");
      main.commit("第一子誕生");
      privateWork.commit("CoffeeBreakPoint(個人ブログ)開発");
      subWorks.commit("tech boost副業参画");
      jobSmaregi.commit("株式会社スマレジ 退職");
      jobs.merge(jobSmaregi);

      const jobCybozu = jobs.branch("cybozu");
      jobCybozu.commit("サイボウズ株式会社 入社");
      // const aFeature = develop.branch("a-feature");
      // aFeature
      //   .commit("Make it work")
      //   .commit("Make it right")
      //   .commit({
      //     subject: "Make it fast",
      //     renderMessage: renderMessage
      //   });
      //
      // // develop.merge(aFeature);
      // develop.commit("Prepare v1");
      // const test = develop.branch("test")
      // test.commit("Prepare v1");
      //
      // aFeature.commit("Make it work")
      // // main.merge(develop).tag("v1.0.0"); 
    }}
    </Gitgraph>
  )
}

