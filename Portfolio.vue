<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="no-print sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div class="container mx-auto flex items-center justify-between px-6 py-3">
        <h1 class="font-mono text-sm font-medium text-muted-foreground">Portfolio</h1>
        <div class="flex items-center gap-2">
          <button
            @click="handleEmailClick"
            class="group relative flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
            title="Contact me"
          >
            <Mail :size="16" />
            <span class="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              Contact me
            </span>
          </button>
          <button
            @click="toggleTheme"
            class="flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <Sun v-if="isDark" :size="16" />
            <Moon v-else :size="16" />
          </button>
          <button
            @click="toggleEdit"
            :class="[
              'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm',
              isEditing ? 'bg-primary text-primary-foreground' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
            ]"
          >
            <Save v-if="isEditing" :size="16" />
            <Edit3 v-else :size="16" />
            {{ isEditing ? '저장' : '편집' }}
          </button>
          <button
            @click="handlePrint"
            class="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            <Printer :size="16" />
            PDF 저장
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-8">
      <!-- Resume Section - Page 1 -->
      <div class="print:break-after-page space-y-6">
        <div class="flex items-start justify-between gap-8 border-b border-border pb-4">
          <div class="space-y-2">
            <EditableSection
              v-model="portfolioData.name"
              :is-editing="isEditing"
              class="text-3xl font-bold text-foreground"
            />
            <EditableSection
              v-model="portfolioData.shortBio"
              :is-editing="isEditing"
              :multiline="true"
              class="max-w-2xl text-sm text-muted-foreground"
            />
          </div>
          
          <div class="shrink-0 space-y-1 text-right text-xs text-muted-foreground">
            <EditableSection
              v-model="portfolioData.contact.phone"
              :is-editing="isEditing"
              class="block"
            />
            <EditableSection
              v-model="portfolioData.contact.email"
              :is-editing="isEditing"
              class="block"
            />
            <EditableSection
              v-model="portfolioData.contact.secondaryEmail"
              :is-editing="isEditing"
              class="block"
            />
            <EditableSection
              v-model="portfolioData.contact.blog"
              :is-editing="isEditing"
              class="block text-accent hover:underline"
            />
            <EditableSection
              v-model="portfolioData.contact.github"
              :is-editing="isEditing"
              class="block text-accent hover:underline"
            />
          </div>
        </div>

        <!-- Education -->
        <section class="space-y-2">
          <h2 class="border-b border-border pb-1 text-lg font-semibold text-foreground">학력 사항</h2>
          <div class="space-y-1.5">
            <div class="flex items-baseline justify-between">
              <EditableSection
                v-model="portfolioData.education.institution"
                :is-editing="isEditing"
                class="text-sm font-medium text-foreground"
              />
              <EditableSection
                v-model="portfolioData.education.period"
                :is-editing="isEditing"
                class="text-xs text-muted-foreground"
              />
            </div>
            <EditableSection
              v-model="portfolioData.education.major"
              :is-editing="isEditing"
              class="block text-xs text-muted-foreground"
            />
            <EditableSection
              v-model="portfolioData.education.status"
              :is-editing="isEditing"
              class="block text-xs text-muted-foreground"
            />
          </div>
        </section>

        <!-- Tech Stack -->
        <section class="space-y-2">
          <h2 class="border-b border-border pb-1 text-lg font-semibold text-foreground">기술 스택</h2>
          <div class="grid grid-cols-2 gap-x-8 gap-y-2">
            <div>
              <div class="mb-0.5 text-xs font-medium text-foreground">언어</div>
              <EditableSection
                v-model="portfolioData.techStack.languages"
                :is-editing="isEditing"
                class="text-xs text-muted-foreground"
              />
            </div>
            <div>
              <div class="mb-0.5 text-xs font-medium text-foreground">게임 엔진</div>
              <EditableSection
                v-model="portfolioData.techStack.engine"
                :is-editing="isEditing"
                class="text-xs text-muted-foreground"
              />
            </div>
            <div>
              <div class="mb-0.5 text-xs font-medium text-foreground">버전 관리</div>
              <EditableSection
                v-model="portfolioData.techStack.versionControl"
                :is-editing="isEditing"
                class="text-xs text-muted-foreground"
              />
            </div>
            <div>
              <div class="mb-0.5 text-xs font-medium text-foreground">배포</div>
              <EditableSection
                v-model="portfolioData.techStack.deployment"
                :is-editing="isEditing"
                class="text-xs text-muted-foreground"
              />
            </div>
            <div class="col-span-2">
              <div class="mb-0.5 text-xs font-medium text-foreground">툴</div>
              <EditableSection
                v-model="portfolioData.techStack.tools"
                :is-editing="isEditing"
                class="text-xs text-muted-foreground"
              />
            </div>
          </div>
        </section>

        <!-- Projects -->
        <section class="space-y-4">
          <h2 class="border-b border-border pb-1 text-lg font-semibold text-foreground">프로젝트 경험</h2>
          
          <div
            v-for="(project, index) in portfolioData.projects"
            :key="index"
            class="space-y-2 border-l-2 border-accent pl-4"
          >
            <div class="space-y-1">
              <div class="flex flex-wrap items-baseline justify-between gap-x-2">
                <EditableSection
                  v-model="project.name"
                  :is-editing="isEditing"
                  class="text-base font-semibold text-foreground"
                />
                <EditableSection
                  v-model="project.period"
                  :is-editing="isEditing"
                  class="text-xs text-muted-foreground"
                />
              </div>
              
              <div class="space-y-0.5">
                <div class="text-xs font-medium text-foreground">기술 스택</div>
                <EditableSection
                  v-model="project.techStack"
                  :is-editing="isEditing"
                  class="text-xs text-muted-foreground"
                />
              </div>
            </div>

            <ul class="space-y-1.5">
              <li
                v-for="(achievement, i) in project.achievements"
                :key="i"
                class="flex gap-2"
              >
                <span class="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <EditableSection
                  v-model="project.achievements[i]"
                  :is-editing="isEditing"
                  :multiline="true"
                  class="text-xs leading-relaxed text-foreground/80"
                />
              </li>
            </ul>
          </div>
        </section>

        <!-- Awards -->
        <section class="space-y-2">
          <h2 class="border-b border-border pb-1 text-lg font-semibold text-foreground">수상 및 자격증</h2>
          <ul class="space-y-1.5">
            <li
              v-for="(award, i) in portfolioData.awards"
              :key="i"
              class="flex gap-2"
            >
              <span class="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <EditableSection
                v-model="portfolioData.awards[i]"
                :is-editing="isEditing"
                class="text-xs text-foreground/80"
              />
            </li>
          </ul>
        </section>
      </div>

      <!-- Cover Letter - Page 2 -->
      <div class="mt-12 space-y-6 print:mt-0 print:break-after-page">
        <h1 class="border-b-2 border-accent pb-2 text-2xl font-bold text-foreground">자기소개서</h1>
        <section
          v-for="(statement, index) in portfolioData.statements"
          :key="index"
          class="space-y-3"
        >
          <EditableSection
            v-model="statement.title"
            :is-editing="isEditing"
            class="border-b border-border pb-2 text-lg font-semibold text-foreground"
          />
          <EditableSection
            v-model="statement.content"
            :is-editing="isEditing"
            :multiline="true"
            class="whitespace-pre-line text-xs leading-relaxed text-foreground/80"
          />
        </section>
      </div>

      <!-- Project Showcase - Page 3 -->
      <div class="mt-12 space-y-8 print:mt-0 print:break-before-page">
        <div class="mx-auto max-w-4xl">
          <h1 class="border-b-2 border-accent pb-3 text-3xl font-bold text-foreground">Project Showcase</h1>
        </div>
        
        <div class="space-y-12">
          <div
            v-for="(project, index) in portfolioData.projects"
            :key="index"
            class="mx-auto max-w-4xl space-y-4"
          >
            <h2 class="text-2xl font-bold text-foreground">{{ project.name }}</h2>
            
            <a 
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="block max-w-xl overflow-hidden rounded-lg border border-border shadow-lg transition-transform hover:scale-105"
            >
              <div class="relative aspect-video w-full bg-muted">
                <img
                  :src="project.image"
                  :alt="`${project.name} screenshot`"
                  class="h-full w-full cursor-pointer object-cover"
                />
              </div>
            </a>
            
            <div class="space-y-3">
              <div>
                <h3 class="mb-2 text-sm font-semibold text-foreground">프로젝트 개요</h3>
                <p class="text-xs leading-relaxed text-foreground/80">{{ project.period }}</p>
              </div>
              
              <div>
                <h3 class="mb-2 text-sm font-semibold text-foreground">사용 기술</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tag, i) in project.tags"
                    :key="i"
                    class="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 class="mb-2 text-sm font-semibold text-foreground">주요 성과</h3>
                <ul class="space-y-2">
                  <li
                    v-for="(achievement, i) in project.achievements"
                    :key="i"
                    class="flex gap-2"
                  >
                    <span class="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span class="text-xs leading-relaxed text-foreground/80">{{ achievement }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <a
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub에서 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Mail, Moon, Sun, Edit3, Save, Printer } from 'lucide-vue-next'
import EditableSection from './components/EditableSection.vue'

interface Contact {
  phone: string
  email: string
  secondaryEmail: string
  blog: string
  github: string
}

interface Education {
  institution: string
  major: string
  status: string
  period: string
}

interface TechStack {
  languages: string
  engine: string
  versionControl: string
  deployment: string
  tools: string
}

interface Project {
  name: string
  period: string
  techStack: string
  githubUrl: string
  image: string
  tags: string[]
  achievements: string[]
}

interface Statement {
  title: string
  content: string
}

interface PortfolioData {
  name: string
  shortBio: string
  contact: Contact
  education: Education
  techStack: TechStack
  projects: Project[]
  awards: string[]
  statements: Statement[]
}

const isEditing = ref(false)
const isDark = ref(false)

const portfolioData = ref<PortfolioData>({
  name: '이상현',
  shortBio: 'Unity 기반 게임 개발자로, 시스템 설계부터 최적화까지 전 과정을 경험하며 사용자 경험 개선에 집중합니다.',
  contact: {
    phone: '010-6362-4696',
    email: 'shlee21016@gmail.com',
    secondaryEmail: 'shlee4695@naver.com',
    blog: 'https://kogijang.tistory.com/',
    github: 'https://github.com/NotZZu'
  },
  education: {
    institution: '인하공업전문대학',
    major: '컴퓨터 정보 공학',
    status: '졸업예정',
    period: '2021년 3월 ~ 2026년 3월'
  },
  techStack: {
    languages: 'C#, Python',
    engine: 'Unity',
    versionControl: 'Git',
    deployment: 'Unity WebGL빌드 및 링크 기반 배포',
    tools: 'Unity Editor, Visual Studio'
  },
  projects: [
    {
      name: 'Forester',
      period: '2024.09 ~ 2025.01',
      techStack: 'C#, Unity, Git',
      githubUrl: 'https://github.com/NotZZu/Forester.git',
      image: '/images/forester-game.png',
      tags: ['Unity', 'C#', 'Git'],
      achievements: [
        '객체 풀 패턴, 비동기 처리를 활용해 프레임 유지 및 메모리 사용 최소화',
        '맵 생성 시 지형을 자동 배치하고, 지형에 따라 플레이어 및 엔티티의 이동 제약 구현',
        '싱글톤 패턴을 활용한 매니저 클래스 구성, UI 및 게임 흐름 제어',
        '아이템마다 고유한 속성을 부여하고, 조합을 통해 유니크한 아이템을 만들 수 있는 기능 구현'
      ]
    },
    {
      name: '기사는 타이밍',
      period: '2025.02 ~ 2025.09',
      techStack: 'C#, Unity, Git, Spread sheet, Json',
      githubUrl: 'https://github.com/Terrrrrrra/TheTimingKnight.git',
      image: '/images/knight-timing-game.png',
      tags: ['Unity', 'C#', 'Git', 'Spread Sheet', 'Json'],
      achievements: [
        '적 선택 로직, 연승 시스템, 전투 판정 및 보상 지급 구현',
        '30회 이상의 테스트를 통해 밸런스를 조정하여 평균 연승 횟수를 3회에서 10회 이상으로 향상시켜, 자연스러운 보상 곡선을 구현함',
        '게임 시스템 설계 회의 참여, 반격 타이밍 및 보상 구조 아이디어 제안',
        '버그 리포트 15건 중 13건 직접 수정'
      ]
    }
  ],
  awards: [
    '성적 장학금 3회 수상',
    '정보처리산업기사 (2025-12: 취득 예정)',
    'ISTQB - CTFL (2025-12: 취득 예정)'
  ],
  statements: [
    {
      title: '배움을 행동으로 잇는 힘',
      content: `저는 배움과 그것을 삶에 적용하는 데 열정적인 사람입니다. 어린 시절, 부모님은 제가 새로운 것에 도전하고, 스스로 즐길 수 있는 일을 찾을 수 있도록 아낌없는 지원을 해주셨습니다. 그 덕분에 저는 배움의 기쁨을 느끼며 몰입하는 법을 터득하였고, 이는 제 삶에서 열정이라는 가치를 형성하는 데 중요한 기반이 되었습니다.

이 열정은 학업에서도 빛을 발했습니다. 학업 초기에는 열정만으로 시작했지만, 꾸준한 의지와 실천의 부족으로 인해 원하는 성과를 얻는 데 어려움을 겪었습니다. 그러던 중 단순히 배우는 것에만 만족하는 것이 아니라 즐기면서 꾸준히 실천하는 것이 더 중요한 태도라는 깨달음을 얻었습니다. 열정을 행동으로 연결하는 것이야말로 진정한 성장의 시작임을 깨닫게 된 순간이었습니다.

이후 저는 구체적인 목표를 설정하고 실천하는 습관을 기르기 시작했습니다. 예를 들어, 강의 전에는 교안을 미리 읽어 학습 내용을 준비했고, 강의 도중에는 적극적으로 참여하며 모든 내용을 이해하는 데 집중했습니다. 강의 후에는 반드시 복습을 진행하며 학습 내용을 체화하려고 노력했습니다. 이러한 일상적인 노력은 성과로 이어졌습니다. 성적이 크게 향상되며 대부분의 과목에서 A+를 받았고, 이는 배움의 기쁨과 열정을 행동으로 연결했을 때 얻을 수 있는 결과임을 보여주었습니다.

이 경험은 제 삶에서 열정이 단순한 감정을 넘어 행동을 통해 빛나는 원동력이 될 수 있다는 것을 일깨워주었습니다. 열정은 목표를 이루는 힘이며, 앞으로도 제 삶의 중요한 가치로 자리할 것입니다.`
    },
    {
      title: '신뢰를 바탕으로 성장하는 리더십',
      content: `프로젝트를 성공적으로 이끄는 리더십은 단순한 지시가 아니라, 팀원들이 신뢰하고 따를 수 있는 환경을 조성하는 곳에서 시작한다고 생각합니다. 안티 치트 프로그램 기획 프로젝트의 리더를 맡게 되었을 때, 저는 최상의 결과를 얻는 것을 목표로 하였습니다. 그러나 초기에는 팀원들이 기대만큼의 결과물을 도출하지 못하였고, 이를 해결하기 위해 직접 개입하거나 팀원들의 아이디어를 수정하는 방식을 선택하였습니다. 하지만 이러한 접근 방식이 오히려 팀원들의 신뢰를 떨어뜨리고 협업의 분위기를 경직되게 만들었습니다.

이러한 문제를 해결하기 위해 리더십의 방향을 바꾸기로 결정하였습니다. 원하는 결과를 얻기 위해 직접 모든 작업을 수행하는 것이 아니라, 팀원들이 스스로 최상의 결과를 도출할 수 있도록 돕는 환경을 조성하는 것이 중요하다고 판단하였습니다. 이를 위해 먼저 팀원들에게 신뢰할 수 있는 정보를 수집하는 방법을 교육하였습니다. 기존에는 비효율적인 검색 방식으로 자료 조사에 많은 시간을 소비하고 있었기 때문에, 신뢰할 수 있는 데이터베이스와 공식 문서를 활용하는 방법을 설명하였습니다. 이를 통해 팀원들은 자료 조사에 걸리는 시간을 평균 5시간에서 2시간으로 단축할 수 있었습니다.

또한, 프로젝트 진행 과정에서 정보가 중복되거나 누락되는 문제를 해결하기 위해 문서화 및 공유 체계를 구축하였습니다. 팀원들이 작업 중 참조할 수 있도록 주요 개념과 목표를 문서로 정리하고, 모든 자료를 공유할 수 있는 중앙 저장소를 마련하였습니다. 이를 통해 팀원들은 더 쉽게 필요한 정보를 확인할 수 있었고, 회의 시간 동안 발생하던 불필요한 논의를 최소화하여 회의 시간을 50% 이상 단축하였습니다.

이러한 변화를 통해 프로젝트의 진행 속도가 향상되었으며, 팀원들이 기대했던 수준 이상의 결과물을 도출할 수 있었습니다. 무엇보다도, 저는 팀원들과의 신뢰를 다시 회복할 수 있었고, 보다 협력적인 환경에서 프로젝트를 이끌어갈 수 있었습니다. 이 경험을 통해 리더십의 핵심은 통제보다 환경 조성에 있으며, 앞으로도 팀원들과 함께 성장하는 리더로서 더욱 발전해 나갈 것입니다.`
    }
  ]
})

const toggleEdit = () => {
  isEditing.value = !isEditing.value
}

const handlePrint = () => {
  window.print()
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const handleEmailClick = () => {
  window.location.href = `mailto:${portfolioData.value.contact.email}`
}

onMounted(() => {
  // Check initial theme preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = prefersDark
  if (prefersDark) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<style>
@import url('./styles.css');
</style>
