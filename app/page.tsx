"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Printer, Edit3, Save, Moon, Sun, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { EditableSection } from "@/components/editable-section"
import Image from "next/image"

export default function Portfolio() {
  const [isEditing, setIsEditing] = useState(false)
  const { theme, setTheme } = useTheme()

  const [portfolioData, setPortfolioData] = useState({
    name: "이상현",
    shortBio: "Unity 기반 게임 개발자로, 시스템 설계부터 최적화까지 전 과정을 경험하며 사용자 경험 개선에 집중합니다.",
    contact: {
      phone: "010-6362-4696",
      email: "shlee21016@gmail.com",
      secondaryEmail: "shlee4695@naver.com",
      blog: "https://kogijang.tistory.com/",
      github: "https://github.com/NotZZu",
    },
    education: {
      institution: "인하공업전문대학",
      major: "컴퓨터 정보 공학",
      status: "졸업예정",
      period: "2021년 3월 ~ 2026년 3월",
    },
    techStack: {
      languages: "C#, Python",
      engine: "Unity",
      versionControl: "Git",
      deployment: "Unity WebGL빌드 및 링크 기반 배포",
      tools: "Unity Editor, Visual Studio",
    },
    projects: [
      {
        name: "Forester",
        period: "2024.09 ~ 2025.01",
        role: "기획, 개발",
        techStack: "C#, Unity, Git",
        githubUrl: "https://github.com/NotZZu/Forester.git",
        image: "/images/forester-game.png", // swap image URL to correct one
        tags: ["Unity", "C#", "Git"],
        achievements: [
          "객체 풀 패턴, 비동기 처리를 활용해 프레임 유지 및 메모리 사용 최소화",
          "맵 생성 시 지형을 자동 배치하고, 지형에 따라 플레이어 및 엔티티의 이동 제약 구현",
          "싱글톤 패턴을 활용한 매니저 클래스 구성, UI 및 게임 흐름 제어",
          "아이템마다 고유한 속성을 부여하고, 조합을 통해 유니크한 아이템을 만들 수 있는 기능 구현",
        ],
      },
      {
        name: "기사는 타이밍",
        period: "2025.02 ~ 2025.09",
        role: "기획, 개발, 테스트",
        techStack: "C#, Unity, Git, Spread sheet, Json",
        githubUrl: "https://github.com/Terrrrrrra/TheTimingKnight.git",
        image: "/images/knight-is-timing.png",
        tags: ["Unity", "C#", "Git", "Spread Sheet", "Json"],
        achievements: [
          "적 선택 로직, 연승 시스템, 전투 판정 및 보상 지급 구현",
          "30회 이상의 테스트를 통해 밸런스를 조정하여 평균 연승 횟수를 3회에서 10회 이상으로 향상시켜, 자연스러운 보상 곡선을 구현함",
          "게임 시스템 설계 회의 참여, 반격 타이밍 및 보상 구조 아이디어 제안",
          "버그 리포트 15건 중 13건 직접 수정",
        ],
      },
    ],
    awards: ["성적 장학금 3회 수상", "정보처리산업기사 (2025년 10월 취득)", "ISTQB - CTFL (2025년 11월 취득)"],
    statements: [
      {
        title: "창의성을 성과로 잇는 힘",
        content: `민트로켓은 제가 가진 창의성과 열정을 가장 이상적으로 실현할 수 있는 환경입니다. 특히 구성원의 자율성을 존중하는 bottom-up 형식의 개발 방식은 창의적 아이디어를 빠르게 수용하고 실행하는 제가 추구해온 가치와 완벽히 일치한다고 느꼈습니다.데이브 더 다이버를 플레이하며 도전과제를 100% 달성하는 과정에서, 해양 어드벤처와 타이쿤 요소를 결합한 독창적인 시도야말로 민트로켓 고유의 창의적이고 유연한 개발 철학의 정수임을 깊이 느꼈습니다. 사용자들에게 새로운 즐거움을 전달하고자 하는 민트로켓의 비전에 동참하여 저의 문제 해결 능력과 창의성을 펼치고 싶다는 강한 열망을 갖게 되었습니다.이러한 열정을 행동으로 연결하여 혁신을 이끌었던 경험이 있습니다. 저는 민트로켓의 개발 철학, 즉 창의성을 통한 사용자 경험 개선을 실현했던 경험을 가지고 있습니다.모바일 캐주얼 액션 게임 개발 프로젝트에 참여했을 때, 핵심은 적의 공격 타이밍에 맞춰 반격하여 쓰러트리는 단순한 메커니즘이었습니다. 하지만 저는 **'단순한 반복을 넘어 깊이 있는 몰입을 선사해야 한다'**는 목표를 세웠고, 이 열정을 실현하기 위한 구체적인 아이디어를 행동으로 옮겼습니다.저는 핵심 전투 메커니즘을 강화하고자 반격 타이밍 및 보상 구조에 대한 아이디어를 제안하고, 이를 구현하기 위해 전투 판정 및 보상 지급 시스템을 직접 설계하고 구현하는 도전을 감행했습니다. 이 창의적인 시도는 이후 적 선택 로직 및 연승 시스템 구현으로 이어지는 실천력을 발휘하게 했습니다.가장 중요한 것은 꾸준한 실천이었습니다. 저는 30회 이상의 테스트를 거치며 밸런스를 정밀하게 조정했습니다. 그 결과, 게임의 평균 연승 횟수를 3회에서 10회 이상으로 향상시키는 괄목할 만한 성과를 달성했습니다. 이는 플레이어가 게임에 몰입하여 지속적으로 도전할 수 있는 자연스러운 보상 곡선을 성공적으로 구현한 경험이며, 창의적인 아이디어를 구체적인 성과로 연결하는 힘을 입증했습니다. (추가로, 버그 리포트 15건 중 13건을 직접 수정하며 시스템의 안정성을 확보하는 책임감도 함께 발휘했습니다.)이 경험은 제 삶에서 열정이 단순한 감정을 넘어 행동을 통해 빛나는 원동력이 될 수 있다는 것을 일깨워주었습니다. 열정은 목표를 이루는 힘이며, 앞으로도 이 가치를 바탕으로 민트로켓에서 성장할 것입니다.입사 포부: 민트로켓에 입사한 이후, 저는 게임 시스템/콘텐츠 설계 전문가로서 팀원들과 함께 자율적인 창의성이 시너지를 낼 수 있도록 기여하고 싶습니다. 저의 시스템 설계 및 밸런싱 전문성을 바탕으로 프로젝트를 리딩하고 혁신적인 아이디어를 구체화해 나가겠습니다.궁극적으로는 500만 명 이상의 사용자에게 '데이브 더 다이버'가 선사했던 것과 같은 새롭고 예측 불가능한 즐거움을 선사하는 것이 목표입니다. 민트로켓의 철학을 적극적으로 실천하여, 새로운 간판 게임으로 자리 잡을 수 있는 결과물을 만드는 데 기여하며 회사의 성장에 이바지하는 핵심 인재가 되겠습니다.`,
      },
      {
        title: "배움을 행동으로 잇는 힘",
        content: `저는 배움과 그것을 삶에 적용하는 데 열정적인 사람입니다. 어린 시절, 부모님은 제가 새로운 것에 도전하고, 스스로 즐길 수 있는 일을 찾을 수 있도록 아낌없는 지원을 해주셨습니다. 그 덕분에 저는 배움의 기쁨을 느끼며 몰입하는 법을 터득하였고, 이는 제 삶에서 열정이라는 가치를 형성하는 데 중요한 기반이 되었습니다.

이 열정은 학업에서도 빛을 발했습니다. 학업 초기에는 열정만으로 시작했지만, 꾸준한 의지와 실천의 부족으로 인해 원하는 성과를 얻는 데 어려움을 겪었습니다. 그러던 중 단순히 배우는 것에만 만족하는 것이 아니라 즐기면서 꾸준히 실천하는 것이 더 중요한 태도라는 깨달음을 얻었습니다. 열정을 행동으로 연결하는 것이야말로 진정한 성장의 시작임을 깨닫게 된 순간이었습니다.

이후 저는 구체적인 목표를 설정하고 실천하는 습관을 기르기 시작했습니다. 예를 들어, 강의 전에는 교안을 미리 읽어 학습 내용을 준비했고, 강의 도중에는 적극적으로 참여하며 모든 내용을 이해하는 데 집중했습니다. 강의 후에는 반드시 복습을 진행하며 학습 내용을 체화하려고 노력했습니다. 이러한 일상적인 노력은 성과로 이어졌습니다. 성적이 크게 향상되며 대부분의 과목에서 A+를 받았고, 이는 배움의 기쁨과 열정을 행동으로 연결했을 때 얻을 수 있는 결과임을 보여주었습니다.

이 경험은 제 삶에서 열정이 단순한 감정을 넘어 행동을 통해 빛나는 원동력이 될 수 있다는 것을 일깨워주었습니다. 열정은 목표를 이루는 힘이며, 앞으로도 제 삶의 중요한 가치로 자리할 것입니다.`,
      },
      {
        title: "신뢰를 바탕으로 성장하는 리더십",
        content: `프로젝트를 성공적으로 이끄는 리더십은 단순한 지시가 아니라, 팀원들이 신뢰하고 따를 수 있는 환경을 조성하는 곳에서 시작한다고 생각합니다. 안티 치트 프로그램 기획 프로젝트의 리더를 맡게 되었을 때, 저는 최상의 결과를 얻는 것을 목표로 하였습니다. 그러나 초기에는 팀원들이 기대만큼의 결과물을 도출하지 못하였고, 이를 해결하기 위해 직접 개입하거나 팀원들의 아이디어를 수정하는 방식을 선택하였습니다. 하지만 이러한 접근 방식이 오히려 팀원들의 신뢰를 떨어뜨리고 협업의 분위기를 경직되게 만들었습니다.

이러한 문제를 해결하기 위해 리더십의 방향을 바꾸기로 결정하였습니다. 원하는 결과를 얻기 위해 직접 모든 작업을 수행하는 것이 아니라, 팀원들이 스스로 최상의 결과를 도출할 수 있도록 돕는 환경을 조성하는 것이 중요하다고 판단하였습니다. 이를 위해 먼저 팀원들에게 신뢰할 수 있는 정보를 수집하는 방법을 교육하였습니다. 기존에는 비효율적인 검색 방식으로 자료 조사에 많은 시간을 소비하고 있었기 때문에, 신뢰할 수 있는 데이터베이스와 공식 문서를 활용하는 방법을 설명하였습니다. 이를 통해 팀원들은 자료 조사에 걸리는 시간을 평균 5시간에서 2시간으로 단축할 수 있었습니다.

또한, 프로젝트 진행 과정에서 정보가 중복되거나 누락되는 문제를 해결하기 위해 문서화 및 공유 체계를 구축하였습니다. 팀원들이 작업 중 참조할 수 있도록 주요 개념과 목표를 문서로 정리하고, 모든 자료를 공유할 수 있는 중앙 저장소를 마련하였습니다. 이를 통해 팀원들은 더 쉽게 필요한 정보를 확인할 수 있었고, 회의 시간 동안 발생하던 불필요한 논의를 최소화하여 회의 시간을 50% 이상 단축하였습니다.

이러한 변화를 통해 프로젝트의 진행 속도가 향상되었으며, 팀원들이 기대했던 수준 이상의 결과물을 도출할 수 있었습니다. 무엇보다도, 저는 팀원들과의 신뢰를 다시 회복할 수 있었고, 보다 협력적인 환경에서 프로젝트를 이끌어갈 수 있었습니다. 이 경험을 통해 리더십의 핵심은 통제보다 환경 조성에 있으며, 앞으로도 팀원들과 함께 성장하는 리더로서 더욱 발전해 나갈 것입니다.`,
      },
    ],
  })

  const handlePrint = () => {
    window.print()
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const updateField = (path: string[], value: string) => {
    setPortfolioData((prev) => {
      const newData = JSON.parse(JSON.stringify(prev))
      let current: any = newData

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]]
      }

      current[path[path.length - 1]] = value
      return newData
    })
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.contact.email}`
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="no-print sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <h1 className="font-mono text-sm font-medium text-muted-foreground">Portfolio</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleEmailClick}
              className="group relative h-9 w-9"
              title="Contact me"
            >
              <Mail className="h-4 w-4" />
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                Contact me
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant={isEditing ? "default" : "outline"} size="sm" onClick={toggleEdit} className="gap-2">
              {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
              {isEditing ? "저장" : "편집"}
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2 bg-transparent">
              <Printer className="h-4 w-4" />
              PDF 저장
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Resume Section - Page 1 */}
        <div className="print:break-after-page space-y-3">
          <div className="flex items-start justify-between gap-8 border-b border-border pb-2">
            <div className="space-y-1">
              <EditableSection
                isEditing={isEditing}
                value={portfolioData.name}
                onChange={(value) => updateField(["name"], value)}
                className="text-3xl font-bold text-foreground"
              />
              <EditableSection
                isEditing={isEditing}
                value={portfolioData.shortBio}
                onChange={(value) => updateField(["shortBio"], value)}
                multiline
                className="max-w-2xl text-sm text-muted-foreground"
              />
            </div>

            <div className="shrink-0 space-y-0.5 text-right text-xs text-muted-foreground">
              <EditableSection
                isEditing={isEditing}
                value={portfolioData.contact.phone}
                onChange={(value) => updateField(["contact", "phone"], value)}
                className="block"
              />
              <EditableSection
                isEditing={isEditing}
                value={portfolioData.contact.email}
                onChange={(value) => updateField(["contact", "email"], value)}
                className="block"
              />
              <EditableSection
                isEditing={isEditing}
                value={portfolioData.contact.secondaryEmail}
                onChange={(value) => updateField(["contact", "secondaryEmail"], value)}
                className="block"
              />
              <EditableSection
                isEditing={isEditing}
                value={portfolioData.contact.blog}
                onChange={(value) => updateField(["contact", "blog"], value)}
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              />
              <EditableSection
                isEditing={isEditing}
                value={portfolioData.contact.github}
                onChange={(value) => updateField(["contact", "github"], value)}
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              />
            </div>
          </div>

          {/* Education and Awards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Education */}
            <section className="space-y-1">
              <h2 className="border-b border-border pb-0.5 text-lg font-semibold text-foreground">학력 사항</h2>
              <div className="space-y-0.5">
                <div className="flex items-baseline justify-between">
                  <EditableSection
                    isEditing={isEditing}
                    value={portfolioData.education.institution}
                    onChange={(value) => updateField(["education", "institution"], value)}
                    className="text-sm font-medium text-foreground"
                  />
                  <EditableSection
                    isEditing={isEditing}
                    value={portfolioData.education.period}
                    onChange={(value) => updateField(["education", "period"], value)}
                    className="text-xs text-muted-foreground"
                  />
                </div>
                <EditableSection
                  isEditing={isEditing}
                  value={portfolioData.education.major}
                  onChange={(value) => updateField(["education", "major"], value)}
                  className="block text-xs text-muted-foreground"
                />
                <EditableSection
                  isEditing={isEditing}
                  value={portfolioData.education.status}
                  onChange={(value) => updateField(["education", "status"], value)}
                  className="block text-xs text-muted-foreground"
                />
              </div>
            </section>

            {/* Awards */}
            <section className="space-y-1">
              <h2 className="border-b border-border pb-0.5 text-lg font-semibold text-foreground">수상 및 자격증</h2>
              <ul className="space-y-0.5">
                {portfolioData.awards.map((award, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <EditableSection
                      isEditing={isEditing}
                      value={award}
                      onChange={(value) => {
                        const newAwards = [...portfolioData.awards]
                        newAwards[i] = value
                        setPortfolioData({ ...portfolioData, awards: newAwards })
                      }}
                      className="text-xs text-foreground/80"
                    />
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Tech Stack */}
          <section className="space-y-1.5">
            <h2 className="border-b border-border pb-0.5 text-lg font-semibold text-foreground">기술 스택</h2>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-md border border-border bg-accent/5 p-1.5">
                <div className="mb-0.5 text-xs font-semibold text-foreground">언어</div>
                <EditableSection
                  isEditing={isEditing}
                  value={portfolioData.techStack.languages}
                  onChange={(value) => updateField(["techStack", "languages"], value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
              <div className="rounded-md border border-border bg-accent/5 p-1.5">
                <div className="mb-0.5 text-xs font-semibold text-foreground">게임 엔진</div>
                <EditableSection
                  isEditing={isEditing}
                  value={portfolioData.techStack.engine}
                  onChange={(value) => updateField(["techStack", "engine"], value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
              <div className="rounded-md border border-border bg-accent/5 p-1.5">
                <div className="mb-0.5 text-xs font-semibold text-foreground">버전 관리</div>
                <EditableSection
                  isEditing={isEditing}
                  value={portfolioData.techStack.versionControl}
                  onChange={(value) => updateField(["techStack", "versionControl"], value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
              <div className="rounded-md border border-border bg-accent/5 p-1.5">
                <div className="mb-0.5 text-xs font-semibold text-foreground">배포</div>
                <EditableSection
                  isEditing={isEditing}
                  value={portfolioData.techStack.deployment}
                  onChange={(value) => updateField(["techStack", "deployment"], value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
              <div className="col-span-2 rounded-md border border-border bg-accent/5 p-1.5">
                <div className="mb-0.5 text-xs font-semibold text-foreground">툴</div>
                <EditableSection
                  isEditing={isEditing}
                  value={portfolioData.techStack.tools}
                  onChange={(value) => updateField(["techStack", "tools"], value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-2">
            <h2 className="border-b border-border pb-0.5 text-lg font-semibold text-foreground">프로젝트 경험</h2>

            {portfolioData.projects.map((project, index) => (
              <div key={index} className="space-y-1 border-l-2 border-accent pl-2.5">
                <div className="space-y-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <EditableSection
                      isEditing={isEditing}
                      value={project.name}
                      onChange={(value) => {
                        const newProjects = [...portfolioData.projects]
                        newProjects[index].name = value
                        setPortfolioData({ ...portfolioData, projects: newProjects })
                      }}
                      className="text-base font-semibold text-foreground"
                    />
                    <EditableSection
                      isEditing={isEditing}
                      value={project.period}
                      onChange={(value) => {
                        const newProjects = [...portfolioData.projects]
                        newProjects[index].period = value
                        setPortfolioData({ ...portfolioData, projects: newProjects })
                      }}
                      className="text-xs text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-xs font-medium text-foreground">역할</span>
                    <div className="flex flex-wrap gap-1">
                      {isEditing ? (
                        <EditableSection
                          isEditing={isEditing}
                          value={project.role}
                          onChange={(value) => {
                            const newProjects = [...portfolioData.projects]
                            newProjects[index].role = value
                            setPortfolioData({ ...portfolioData, projects: newProjects })
                          }}
                          className="text-xs text-muted-foreground"
                        />
                      ) : (
                        project.role.split(",").map((role, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                          >
                            {role.trim()}
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-xs font-medium text-foreground">사용 기술</span>
                    <div className="flex flex-wrap gap-1">
                      {isEditing ? (
                        <EditableSection
                          isEditing={isEditing}
                          value={project.techStack}
                          onChange={(value) => {
                            const newProjects = [...portfolioData.projects]
                            newProjects[index].techStack = value
                            setPortfolioData({ ...portfolioData, projects: newProjects })
                          }}
                          className="text-xs text-muted-foreground"
                        />
                      ) : (
                        project.techStack.split(",").map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          >
                            {tech.trim()}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <ul className="space-y-0.5">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <EditableSection
                        isEditing={isEditing}
                        value={achievement}
                        onChange={(value) => {
                          const newProjects = [...portfolioData.projects]
                          newProjects[index].achievements[i] = value
                          setPortfolioData({ ...portfolioData, projects: newProjects })
                        }}
                        multiline
                        className="text-xs leading-relaxed text-foreground/80"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        {/* Cover Letter - Page 2 */}
        <div className="mt-12 space-y-6 print:mt-0 print:break-after-page">
          <h1 className="border-b-2 border-accent pb-2 text-3xl font-bold text-foreground">자기소개서</h1>
          {portfolioData.statements.map((statement, index) => (
            <section key={index} className="space-y-4">
              <div className="border-b border-border pb-6">
                <EditableSection
                  isEditing={isEditing}
                  value={statement.title}
                  onChange={(value) => {
                    const newStatements = [...portfolioData.statements]
                    newStatements[index].title = value
                    setPortfolioData({ ...portfolioData, statements: newStatements })
                  }}
                  className="text-xl font-semibold text-foreground"
                />
              </div>
              <EditableSection
                isEditing={isEditing}
                value={statement.content}
                onChange={(value) => {
                  const newStatements = [...portfolioData.statements]
                  newStatements[index].content = value
                  setPortfolioData({ ...portfolioData, statements: newStatements })
                }}
                multiline
                className="whitespace-pre-line text-sm leading-relaxed text-foreground/80"
              />
            </section>
          ))}
        </div>

        {/* Project Showcase - Page 3 */}
        <div className="mt-12 space-y-0 print:mt-0">
          <div className="mx-auto max-w-4xl">
            <h1 className="border-b-2 border-accent pb-3 text-4xl font-bold text-foreground">Project Showcase</h1>
          </div>

          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className={`mx-auto max-w-4xl space-y-4 ${index < portfolioData.projects.length - 1 ? "print:break-after-page" : ""} pt-8 print:pt-0`}
            >
              <h2 className="text-3xl font-bold text-foreground">{project.name}</h2>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-2xl overflow-hidden rounded-lg border border-border shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative aspect-video w-full bg-muted">
                  <Image
                    src={
                      project.image ||
                      `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(project.name + " screenshot") || "/placeholder.svg"}`
                    }
                    alt={`${project.name} screenshot`}
                    fill
                    className="cursor-pointer object-cover"
                    priority
                  />
                </div>
              </a>

              <div className="space-y-3">
                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">프로젝트 개요</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">{project.period}</p>
                  <div className="mt-2 space-y-1">
                    <span className="text-sm font-medium text-foreground">역할</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.role.split(",").map((role, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-200 px-2.5 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {role.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">사용 기술</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">주요 성과</h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub에서 보기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
