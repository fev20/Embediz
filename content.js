/* 사이트 콘텐츠는 이 파일에서 수정합니다. 자세한 설명은 README.md를 참고하세요. */
window.EMBEDIZ = {
  "repository": "",
  "video": "./assets/demo.mp4",
  "teams": [
    {
      "id": "doom-camera",
      "title": "임베디드 기기 대상 DOOM 포팅 프로젝트 구성원",
      "year": "2026",
      "context": "화이트햇 스쿨 4기 2차 교육과정 · Embediz",
      "members": [
        {
          "name": "유수민",
          "role": "Project Manager",
          "initials": "SM"
        },
        {
          "name": "김가온",
          "role": "Researcher",
          "initials": "GO"
        },
        {
          "name": "김규민",
          "role": "Researcher",
          "initials": "GM"
        },
        {
          "name": "김민서",
          "role": "Researcher",
          "initials": "MS"
        },
        {
          "name": "민준기",
          "role": "Researcher",
          "initials": "JG"
        },
        {
          "name": "손민우",
          "role": "Researcher",
          "initials": "MW"
        },
        {
          "name": "최수연",
          "role": "Researcher",
          "initials": "SY"
        },
        {
          "name": "황원민",
          "role": "Researcher",
          "initials": "WM"
        }
      ],
      "credits": [
        {
          "role": "담당 멘토",
          "name": "문석주"
        },
        {
          "role": "담당 PL",
          "name": "장형범"
        }
      ]
    },
    {
      "id": "secure-boot",
      "title": "Secure Boot 기술이 적용된 홈캠 분석 프로젝트 구성원",
      "year": "2027",
      "context": "2027년 1~2월 · 홈캠 분석 프로젝트 · Embediz2",
      "members": [],
      "credits": []
    },
    {
      "id": "glitch-doom",
      "title": "글리칭을 활용한 DOOM 포팅 프로젝트 구성원",
      "year": "2027",
      "context": "여름방학 진행 잠정 계획 · 참여 구성원 미정",
      "members": [],
      "credits": []
    }
  ],
  "projects": [
    {
      "id": "doom-camera",
      "number": "01",
      "status": "completed",
      "statusLabel": "완료",
      "year": "2026",
      "period": "2026.08.03 — 10.17",
      "title": "홈캠에서 DOOM을 실행하다",
      "subtitle": "임베디드 기기 대상 DOOM 포팅",
      "description": "JOOAN 홈캠의 펌웨어와 실행 환경을 분석하고, MIPS 기반 실기기에서 DOOM을 실행해 브라우저로 화면과 입력을 연결했습니다.",
      "tags": [
        "Firmware",
        "MIPS",
        "DOOM"
      ],
      "image": "camera",
      "repository": "https://github.com/fev20/WHS4_DOOM_project"
    },
    {
      "id": "secure-boot",
      "number": "02",
      "status": "planned",
      "statusLabel": "준비 중",
      "year": "2027",
      "period": "2027.01 — 02 예정",
      "title": "Secure Boot 적용 홈캠 분석",
      "subtitle": "Secure Boot 기술이 적용된 홈캠 분석",
      "description": "2027년 1~2월에는 Secure Boot 기술이 적용된 홈캠을 분석합니다. 기기의 구조를 이해하고 분석 결과를 정리하는 프로젝트입니다.",
      "tags": [
        "Secure Boot",
        "펌웨어 분석",
        "Embediz2"
      ],
      "image": "secure",
      "details": {
        "heroTitle": "먼저, 기기를 이해합니다.",
        "heroDescription": "Secure Boot 적용 홈캠을 분석하는 겨울 프로젝트입니다.",
        "context": "수료 후 자율 후속 프로젝트",
        "focus": "홈캠 분석",
        "sections": [
          {
            "id": "overview",
            "title": "기존 경험에서 이어지는 분석",
            "paragraphs": [
              "기존 Embediz 프로젝트에서는 JOOAN 홈캠의 펌웨어를 분석하고 실제 기기에서 DOOM을 실행했습니다. 이번에는 Secure Boot 기술이 적용된 홈캠의 구조를 이해하는 분석 프로젝트를 진행할 예정입니다."
            ]
          },
          {
            "id": "scope",
            "title": "1~2월 프로젝트의 범위",
            "paragraphs": [
              "2027년 1~2월 프로젝트는 홈캠 분석을 다룹니다. Secure Boot 적용 기기를 분석하고 그 과정에서 확인한 내용을 정리합니다.",
              "글리칭 적용과 DOOM 포팅은 여름방학에 검토하는 별도 프로젝트입니다. 겨울 프로젝트에서 얻은 분석 결과가 이후 연구의 바탕이 됩니다."
            ]
          },
          {
            "id": "decisions",
            "title": "세부 내용은 팀 논의 후 결정",
            "paragraphs": [
              "구체적인 대상 기기, 분석 범위와 방법, 결과물 및 세부 일정은 팀원들과 토의 후 결정합니다."
            ]
          },
          {
            "id": "next",
            "title": "분석 결과를 다음 연구로",
            "paragraphs": [
              "여름방학에는 분석한 내용을 바탕으로 글리칭을 적용하고 DOOM을 포팅하는 별도 프로젝트를 잠정적으로 계획하고 있습니다. 여름 프로젝트의 정확한 일정과 세부 방법은 아직 정해지지 않았습니다."
            ]
          }
        ],
        "related": {
          "project": "glitch-doom",
          "label": "여름방학 후속 프로젝트 살펴보기"
        }
      }
    },
    {
      "id": "glitch-doom",
      "number": "03",
      "status": "tentative",
      "statusLabel": "잠정 계획",
      "year": "2027",
      "period": "2027 여름방학 · 잠정",
      "title": "글리칭을 활용한 DOOM 포팅",
      "subtitle": "홈캠 분석 결과를 바탕으로 한 글리칭 적용 및 DOOM 포팅",
      "description": "1~2월에 분석한 내용을 바탕으로 글리칭을 적용하고 DOOM을 포팅하는 별도 프로젝트입니다. 여름방학 진행을 잠정적으로 계획하고 있습니다.",
      "tags": [
        "글리칭",
        "DOOM",
        "후속 연구"
      ],
      "image": "glitch",
      "details": {
        "heroTitle": "분석에서, 다음 실험으로.",
        "heroDescription": "겨울의 분석 결과를 바탕으로 준비할 별도 후속 프로젝트입니다.",
        "context": "여름방학 후속 연구 · 잠정 계획",
        "focus": "글리칭 적용 및 DOOM 포팅",
        "sections": [
          {
            "id": "overview",
            "title": "분석 결과를 바탕으로",
            "paragraphs": [
              "2027년 1~2월의 Secure Boot 적용 홈캠 분석 프로젝트에서 확인한 내용을 바탕으로, 글리칭을 적용하고 DOOM을 포팅하는 후속 프로젝트를 검토합니다."
            ]
          },
          {
            "id": "direction",
            "title": "글리칭과 DOOM 포팅",
            "paragraphs": [
              "현재 구상한 방향은 분석 결과에 근거해 글리칭을 적용하고, 이를 바탕으로 DOOM 포팅을 진행하는 것입니다. 구체적인 적용 방법과 구현 범위는 팀원들과 토의 후 결정합니다."
            ]
          },
          {
            "id": "schedule",
            "title": "여름방학 진행을 잠정적으로 계획합니다.",
            "paragraphs": [
              "진행 시기는 2027년 여름방학으로 생각하고 있습니다. 아직 확정된 일정은 없으며, 정확한 시작일과 종료일은 미정입니다."
            ]
          },
          {
            "id": "decisions",
            "title": "아직 정하지 않은 내용",
            "paragraphs": [
              "참여 구성원, 실제 글리칭 기법, 실험 방법, 판정 기준, 산출물과 세부 일정은 팀원들과 토의 후 결정합니다. 이 페이지는 현재의 잠정적인 연구 방향을 소개합니다."
            ]
          }
        ],
        "related": {
          "project": "secure-boot",
          "label": "1~2월 홈캠 분석 프로젝트 살펴보기"
        }
      }
    }
  ],
  "notes": [
    {
      "id": "beyond-doom",
      "category": "연구 방향",
      "date": "2026.11.13",
      "title": "홈캠 분석과 글리칭·DOOM 포팅, 두 프로젝트로",
      "summary": "1~2월에는 홈캠 분석을 진행하고, 여름방학에는 그 결과를 바탕으로 별도의 글리칭·DOOM 포팅 프로젝트를 잠정적으로 계획합니다.",
      "readTime": "2분",
      "sections": [
        {
          "title": "후속 연구를 두 프로젝트로 구분합니다.",
          "text": "2027년 1~2월의 Secure Boot 적용 홈캠 분석과 여름방학의 글리칭·DOOM 포팅은 서로 다른 프로젝트입니다. 먼저 기기를 분석하고, 그 결과를 이후 실험의 바탕으로 활용하려는 계획입니다."
        },
        {
          "title": "겨울: Secure Boot 적용 홈캠 분석",
          "text": "1~2월 프로젝트의 범위는 홈캠 분석입니다. 구체적인 분석 범위와 방법, 결과물은 팀원들과 토의 후 결정합니다."
        },
        {
          "title": "여름: 글리칭 적용과 DOOM 포팅",
          "text": "여름방학에는 겨울에 분석한 내용을 바탕으로 글리칭을 적용하고 DOOM을 포팅하는 별도 프로젝트를 잠정적으로 계획합니다. 정확한 일정과 구체적인 방법은 아직 정하지 않았습니다."
        },
        {
          "title": "프로젝트별 계획과 구성원",
          "text": "각 프로젝트의 범위, 일정, 참여 구성원은 별도로 관리합니다. 세부 연구 계획은 팀원들과 토의 후 결정합니다."
        }
      ],
      "source": "후속 연구 계획 · 2026.11.13",
      "project": "secure-boot"
    },
    {
      "id": "camera-to-browser",
      "category": "DOOM 포팅",
      "date": "2026.10.25",
      "title": "게임은 카메라에서, 화면은 브라우저로",
      "summary": "MIPS 위에서 실행되는 DOOM과 브라우저 사이를 WebSocket으로 연결한 화면·입력 구조.",
      "readTime": "4분",
      "sections": [
        {
          "title": "실행 위치와 표시 위치를 나누다",
          "text": "DOOM은 PC 브라우저가 아니라 JOOAN 홈캠의 CPU에서 실행됩니다. 기기에서 생성한 화면 데이터를 WebSocket으로 전달하고, 브라우저에서는 JavaScript와 Canvas로 표시합니다. 카메라의 원래 센서 영상 스트림과는 별도의 출력 경로입니다."
        },
        {
          "title": "화면을 전달하는 경로",
          "text": "doomgeneric의 DG_DrawFrame에서 화면 버퍼를 확보하고, Mongoose를 통해 바이너리 메시지로 전송합니다. 브라우저는 전달받은 320×200 픽셀 데이터를 Canvas에 그립니다. 초기 BMP 반복 전송 방식에서 최종 WebSocket 방식으로 구성을 변경했습니다."
        },
        {
          "title": "입력은 반대 방향으로",
          "text": "브라우저에서 키의 눌림과 해제를 구분해 같은 WebSocket 연결로 전달합니다. 기기는 수신한 이벤트를 입력 큐에 저장하고, DG_GetKey를 통해 DOOM에 반환합니다. 브라우저가 포커스를 잃거나 연결이 종료될 때도 입력 상태를 정리하도록 구현했습니다."
        },
        {
          "title": "확인한 결과와 남은 한계",
          "text": "실기기 최종 시연에서 웹 Reset 버튼을 통한 실행, 게임 페이지 이동, 시작 화면과 게임 진행 중의 장면 갱신을 확인했습니다. 최종 WebSocket 구성의 정확한 fps와 장시간 실행 안정성은 검증하지 않았습니다."
        }
      ],
      "source": "화이트햇 스쿨 4기 최종보고서 · 2026.10.25",
      "project": "doom-camera"
    },
    {
      "id": "firmware-map",
      "category": "펌웨어 분석",
      "date": "2026.10.25",
      "title": "펌웨어 이미지에서 실행 환경까지",
      "summary": "파티션, 파일시스템, 부팅 스크립트를 연결해 DOOM이 실행될 자리를 찾는 과정.",
      "readTime": "3분",
      "sections": [
        {
          "title": "시작점은 펌웨어의 구조",
          "text": "펌웨어 이미지에서 커널과 파일시스템의 위치를 식별하고, 기기의 mtdparts 선언과 대조해 파티션 구성을 확인했습니다. 매직 바이트로 찾은 위치와 기기에서 사용하는 경계를 함께 살펴보는 방식입니다."
        },
        {
          "title": "각 파일시스템의 역할",
          "text": "rootfs와 appfs는 읽기 전용 SquashFS, config는 쓰기 가능한 JFFS2로 구분했습니다. 프로그램을 배치할 위치와 실행 중 사용할 공간을 정하기 위해 읽기·쓰기 가능 여부와 SD 카드 마운트 지점을 확인했습니다."
        },
        {
          "title": "전원이 켜진 뒤의 흐름",
          "text": "linuxrc에서 BusyBox init, inittab, rcS, startapp으로 이어지는 호출 관계를 추적했습니다. 부팅 스크립트, 웹 서버 GoAhead와 카메라 프로그램이 어떤 순서와 조건으로 실행되는지 연결해 실행 환경을 파악했습니다."
        },
        {
          "title": "포팅을 위한 조건 확인",
          "text": "바이너리 형식, 아키텍처, 엔디언과 라이브러리 의존성을 조사해 크로스컴파일 환경을 구성했습니다. 실제 기기에 맞는 바이너리를 만드는 일과 파일 배치·실행 조건을 확인하는 일을 함께 진행했습니다."
        }
      ],
      "source": "화이트햇 스쿨 4기 최종보고서 · 2026.10.25",
      "project": "doom-camera"
    }
  ]
};
