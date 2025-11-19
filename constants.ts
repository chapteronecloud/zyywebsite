
import { DataStore, Language } from './types';

// Using a placeholder image so the app looks good immediately without upload
export const PROFILE_IMAGE = 'https://raw.githubusercontent.com/chapteronecloud/zyywebsite/main/files/Profile Picture.jpg';
export const PROFILE_IMAGE_SIZE = 'w-40 h-40 md:w-52 md:h-52'; // 调小尺寸
export const PROFILE_IMAGE_FILTER = ''; 



export const CONTENT: DataStore = {
  [Language.EN]: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Tech Stack",
      volunteer: "Volunteer",
      schoolActivity: "School Activity",
      resume: "Resume"
    },
    hero: {
      name: "Yiyun Zhang",
      title: "Quantitative Finance Student",
      subtitle: "Data-Driven Alpha Generation",
      intro: "Financial Technology student at CUFE combining advanced software engineering (Python, C++, SQL) with financial theory. Experienced in building multi-factor models, NLP-based risk systems, and high-frequency strategy backtesting.",
      cta: "Contact Me",
      contactInfo: "**Email:** nhzyy17@163.com\n**Mobile:** 18984324819"
    },
    resumePath: 'https://raw.githubusercontent.com/chapteronecloud/zyywebsite/main/files/Yiyun_Zhang_CV_EN.pdf',
    experience: [
      {
        company: "Shanghai Redwall Taihe Fund Management",
        role: "Quantitative Modeling Intern",
        period: "Nov 2025 – Present",
        summary: [
          "Developing PyTorch time-series deep learning models.",
          "Implementing Listwise Ranking Loss & WPCC."
        ],
        fullDetails: `**Time Series Deep Learning & PyTorch Framework:**
Developed a PyTorch-based time series deep learning model with temporal attention and feature interaction layers to capture nonlinear multi-factor dynamics for return prediction and stock selection.

**Optimisation Methods:**
Enhanced ranking accuracy by implementing Listwise Ranking Loss and Weighted Pearson Correlation Coefficient (WPCC) loss, replacing traditional MSE loss to better address stock re-ranking challenges.

**Backtesting & Performance Evaluation:**
Designed an integrated backtesting framework using excess returns and information coefficient metrics to align model evaluation with business objectives, ensuring robust and practical performance.`
      },
      {
        company: "Lianhai Capital Asset Management",
        role: "Macro Hedge Strategy Intern",
        period: "Feb 2025 – Jun 2025",
        summary: [
          "Built Treasury Yield Forecasting Model with 20+ macro factors.",
          "Deployed Factor Timing Strategy (17.96% annual return).",
          "Applied Black-Litterman Macro Allocation."
        ],
        fullDetails: `**Treasury Yield Forecasting Model:**
Designed 20+ macroeconomic factors and optimised factor selection via Granger causality tests and AIC/BIC criteria to identify leading relationships with risk/return metrics; built factor models to forecast returns and identify risk metrics; quantified marginal factor contributions and set thresholds for portfolio adjustment.

**Factor Timing Strategy (Deployed):**
Architected trend-following/reversal signals into tactical strategies; consolidated multi-strategy outputs at a single-asset level via Mean-Variance Optimisation; optimised allocations by integrating overall and tail risk management using Calmar and Sharpe ratios; achieved a 17.96% annual return, Sharpe 1.77, Max DD: -10.29%.

**Black-Litterman Macro Allocation:**
Integrated macro scenario probability forecasts with asset return expectations into BLviews; calibrated uncertainty parameters using inverse-probability weighting; calculated equilibrium returns across 16 scenarios via MVO with scenario-weighted averages; Sharpe ratio 1.06 vs. 0.9 benchmark; annualised return 5.7% vs. 4.66%.`
      },
      {
        company: "Huatai Securities",
        role: "Financial Engineering Intern",
        period: "Sep 2024 – Jan 2025",
        summary: [
          "Created ETF Flow-based Sector Rotation Strategy (>20% return).",
          "Developed Multi-Period Brinson Attribution Model.",
          "Built Convertible Bond Fund Exposure Estimation Model."
        ],
        fullDetails: `**ETF Flow-based Sector Rotation Strategy:**
Built long-short portfolios using flow-based signals from 28 ETFs; backtesting showed contrarian predictive power under extreme flows, delivering >20% annualised return, Sharpe >1, and ~70% win rate.

**Multi-Period Brinson Attribution Model Development:**
Built a framework with daily sector-level position and return data, enabling granular P&L decomposition to sector-day dimensions; designed rolling-window smoothing using the GRAP algorithm; automated data processing via WindPy, formally integrated into the annual review process.

**Convertible Bond Fund Exposure Estimation Model:**
Developed a real-time positioning system integrating quadratic programming with prior positions estimated via ridge regression with PCA dimensionality reduction to resolve bond index multicollinearity; constructed customised indices incorporating quarterly holdings, enabling tactical allocation.`
      },
      {
        company: "Cardinal Operations",
        role: "Data Analyst Intern",
        period: "Jun 2024 – Sep 2024",
        summary: [
          "Optimized Smart Port Scheduling (150k+ records).",
          "Airline Revenue Forecasting using regression models."
        ],
        fullDetails: `**Smart Port Scheduling Project:**
Analysed 150k+ port operation records with SQL/Python; built efficiency models to identify key drivers and support scheduling optimisation; mapped end-to-end workflow; proposed dispatching rules and bottleneck solutions adopted by the algorithm team, improving unloading efficiency.

**Airline Revenue Forecasting:**
Processed large-scale flight data and designed multi-dimensional features for revenue prediction; applied Python and Excel to find key drivers; produced 12 validated variables adopted in regression models and integrated into revenue management strategies.`
      },
      {
        company: "CITIC Securities",
        role: "Defense & Military Industry Research Intern",
        period: "Mar 2024 – May 2024",
        summary: [
          "In-depth research on 6 leading defense companies.",
          "Valuation & Strategic Analysis for Low-Altitude Economy."
        ],
        fullDetails: `**Industry & Company Analysis:**
Conducted in-depth research for six leading defense companies, covering revenue composition, profit drivers, industry segmentation, market structure, capacity expansion, policy developments, etc.

**Valuation & Strategic Analysis:**
Assisted in the Low-Altitude Economy research, independently analysing two companies, focusing on investment value and corporate strategy separately, and proposed investment and strategic recommendations.`
      }
    ],
    skills: [
      { 
        category: "Software Engineering", 
        items: [
          { name: "Python", level: "Advanced", description: "**Project Experience:**\n\n• **Treasury Yield Model:** Constructed 20+ macro factors using pandas/numpy; factor selection via Granger causality/AIC/BIC.\n• **Factor Timing:** Implemented strategy using cvxpy/scipy.optimize for Mean-Variance Optimization.\n• **ETF Rotation:** Built backtesting framework with backtrader.\n• **NLP System:** Built Siamese neural networks and fine-tuned Chinese-RoBERTa using PyTorch and Transformers." },
          { name: "C++", level: "Intermediate", description: "**Core Competency:**\n\n• Gained a solid foundation in OOP, data structures (linked lists, trees, graphs) and algorithms (sorting, dynamic programming).\n• **Projects:** Applied in mini banking management system.\n• **Competition:** Enhanced problem-solving skills through 'Blue Bridge Cup' algorithm training." },
          { name: "MySQL", level: "Advanced", description: "**Database Management:**\n\n• Wrote complex SQL queries for multi-table joins to identify operational bottlenecks in port optimization projects (Cardinal Operations).\n• Designed and managed cloud SQL databases for earnings call studies, handling hundreds of thousands of records." },
          { name: "MATLAB", level: "Intermediate", description: "**Financial Modeling:**\n\n• Applied Financial Toolbox and Optimization Toolbox.\n• Implemented Black-Litterman models and Dynamic Nelson-Siegel models for yield curve analysis." }
        ] 
      },
      { 
        category: "Data & Analytics", 
        items: [
          { name: "Stata", level: "Advanced", description: "**Empirical Analysis:**\n\n• Executed full analysis on 'Impact of Executives' Academic Experience on P/E Ratios'.\n• Employed panel data fixed-effects models and robustness checks for PEAD research." },
          { name: "Excel VBA", level: "Intermediate", description: "**Automation:**\n\n• Automated cleaning, categorization, and aggregation of flight sales data and port operation reports, significantly improving processing efficiency." },
          { name: "Machine Learning", level: "Advanced", description: "**Techniques:**\n\n• PCA dimensionality reduction.\n• Ridge Regression.\n• LSTM for time-series forecasting.\n• Siamese Neural Networks for semantic similarity." },
          { name: "Deep Learning", level: "Advanced", description: "**Techniques & Frameworks:**\n\n• PyTorch for model training and optimization.\n• Transformer architecture applications for NLP tasks.\n• LightTS and other deep learning time-series models.\n• BERT fine-tuning for domain-specific tasks.\n• Advanced neural network architectures for financial modeling." }
        ] 
      },
       { 
        category: "Language", 
        items: [
          { name: "English", level: "IELTS 7 / GRE 322", description: "Proficient working proficiency in financial and technical contexts." },
          { name: "Mandarin", level: "Native", description: "Native speaker." }
        ] 
      }
    ],
    projects: [
      {
        title: "UBS Financial Elite Challenge",
        role: "Team Leader",
        period: "May 2024 – Jun 2024",
        description: "Engineered an LLM-Agent Collaboration System (GPT-4o + RAG) to automate daily market analysis reports. Built a proprietary A-share macro integrated data corpus and applied FinBERT for sentiment analysis.",
        tags: ["LLM", "Python", "RAG", "FinBERT"],
        pdfPath: 'https://raw.githubusercontent.com/chapteronecloud/zyywebsite/main/files/UBS 挑战赛生成系统介绍.pdf'
      },
      {
        title: "ETF Flow-based Sector Rotation",
        role: "Huatai Securities",
        period: "Sep 2024 – Jan 2025",
        description: "Constructed a flow-based sector rotation strategy using signals extracted from 28 industry ETFs. Backtesting showed contrarian predictive power under extreme flows with a >20% annualized return.",
        tags: ["Quant Strategy", "Backtesting", "ETF", "Python"],
        pdfPath: 'https://raw.githubusercontent.com/chapteronecloud/zyywebsite/main/files/ETF Flow-based Sector Rotation Strategy.pdf'
      },
      {
        title: "Macro Risk NLP Identification System",
        role: "Core member",
        period: "May 2025 – Jun 2025",
        description: "Built a web crawler collecting 17K financial news articles. Fine-tuned Chinese-RoBERTa-wwm-ext & FinBERT-Tone-Chinese models for real-time sentiment quantification across ten macro risk labels. Designed composite risk factors and imitated Barra-style exposure regression; developed interactive dashboard for risk identification and sentiment analytics.",
        tags: ["NLP", "Deep Learning", "Web Crawling", "Dashboard"],
        pdfPath: 'https://raw.githubusercontent.com/chapteronecloud/zyywebsite/main/files/宏观风险 NLP 系统.pdf'
      },
      {
        title: "The Moderating Role of Incremental Information in Earnings Conference Calls on PEAD",
        role: "Independent Research",
        period: "Jun 2024 – Jun 2025",
        description: "Managed 500K+ data cleaning & modeling; quantified MD&A/call disclosure gaps via Siamese NN and large financial language models. Proposed incremental information hypothesis; empirically demonstrated higher incremental information reduces Post-Earnings Announcement Drift effects, offering actionable insights for investment and risk management.",
        tags: ["NLP", "Financial Research", "Machine Learning", "Data Analysis"]
      },
      {
        title: "Treasury Yield Curve Modeling & Macro Forecasting",
        role: "Core member",
        period: "Oct 2024 – Dec 2024",
        description: "Replaced classical VAR with Time-Varying Parameter VAR to estimate dynamic predictive power of yield curve on GDP and CPI. Extracted dynamic Nelson-Siegel factors using Python and MATLAB; applied MCMC Bayesian estimation and wavelet phase spectrum analysis to evaluate the time-frequency predictive features of interest rate factors and their interactions with macroeconomic variables.",
        tags: ["Macro Modeling", "Time Series", "Python", "MATLAB"]
      },
      {
        title: "Factor Momentum Replication & Localisation",
        role: "Core member",
        period: "Oct 2024 – Dec 2024",
        description: "Reproduced the paper's full framework and methodology; processed 47 anomaly factors and engineered principal component factors via Python; developed time-series momentum strategies, validating the relationship between factor momentum and momentum factor and the persistent momentum effects in high-eigenvalue factor dimensions. Developed a proprietary database of 14 A-share factors, conducted China market validation and comparative analysis.",
        tags: ["Quant Strategy", "Factor Analysis", "Python", "Research"]
      }
    ],
    volunteer: [
      {
        role: "Volunteer",
        organization: "China Finance Annual Meeting",
        period: "Oct 2023",
        description: "Assisted in on-site organization for 1200+ scholars. Managed guest reception and agenda guidance for the 'Digital Finance and RegTech' sub-forum, ensuring smooth proceedings for keynote speakers.",
        link: "https://mp.weixin.qq.com/s/EWT2IwncJYvDHxJb1yEPDw"
      },
      {
        role: "Volunteer Teacher",
        organization: "Teach for China (Dream Big Teacher)",
        period: "Feb 2023 - May 2023",
        description: "Participated in the 'Service Learning' model. Supported rural education initiatives to foster student growth while deepening personal understanding of educational equity ('Educating others, finding oneself').",
        link: "https://mp.weixin.qq.com/s/pHnpRysn9FbN0zHP_CXpIA"
      },
      {
        role: "Field Researcher",
        organization: "Peking University CHARLS",
        period: "Jul 2023 - Aug 2023",
        description: "Conducted a 2-month field survey in Yunnan. Interviewed elderly populations on health, cognition, medical insurance, and income. Analyzed data to provide feasibility suggestions for medical and elderly care policies."
      }
    ],
    schoolActivity: [
      {
        role: "Member",
        organization: "CUFE Blockchain Club",
        period: "",
        description: "Active member of the Blockchain Club at Central University of Finance and Economics."
      },
      {
        role: "Student Cadre",
        organization: "CUFE's Academic Practice Dept",
        period: "",
        description: "Served as student cadre in CUFE's Academic Practice Department."
      },
      {
        role: "Member",
        organization: "Investment Banking and Consulting Association (ICAC) at CUFE",
        period: "",
        description: "Active member of the Investment Banking and Consulting Association at Central University of Finance and Economics."
      },
      {
        role: "Member",
        organization: "Securities Research Association of CUFE",
        period: "",
        description: "Active member of the Securities Research Association at Central University of Finance and Economics."
      }
    ]
  },
  [Language.CN]: {
    nav: {
      about: "关于",
      experience: "实习经历",
      projects: "项目展示",
      skills: "技术栈",
      volunteer: "志愿经历",
      schoolActivity: "学校活动",
      resume: "简历"
    },
    hero: {
      name: "张译匀",
      title: "金融科技 / 量化金融",
      subtitle: "数据驱动 · 量化赋能",
      intro: "中央财经大学金融科技专业。具备扎实的Python/C++编程能力与数理统计基础。在多家头部机构积累了多因子模型构建、NLP情感分析、策略回测及归因分析的实战经验。",
      cta: "联系我",
      contactInfo: "**邮箱：** nhzyy17@163.com\n**手机：** 18984324819"
    },
    resumePath: 'https://raw.githubusercontent.com/chapteronecloud/zyywebsite/main/files/Yiyun_Zhang_CV_CN.pdf', 
    experience: [
      {
        company: "上海红墙泰和基金管理有限公司",
        role: "量化建模实习生",
        period: "2025年11月 – 至今",
        summary: [
          "开发基于PyTorch的时间序列深度学习模型。",
          "实施Listwise Ranking Loss和WPCC优化排序。"
        ],
        fullDetails: `**时间序列深度学习与 PyTorch 框架：**
开发了一个基于 PyTorch 的时间序列深度学习模型，利用时序注意力和特征交互层来捕捉收益预测和选股中的非线性多因子动态。

**优化方法：**
通过实施 Listwise Ranking Loss 和加权皮尔逊相关系数 (WPCC) 损失函数，取代传统的 MSE 损失，从而更好地解决股票重新排序的挑战，提高了排序准确性。

**回测与绩效评估：**
设计了一个综合回测框架，使用超额收益和信息系数 (IC) 指标将模型评估与业务目标对齐，确保稳健且实用的表现。`
      },
      {
        company: "北京星鹏联海私募基金管理有限公司",
        role: "宏观对冲策略实习生",
        period: "2025年2月 – 2025年6月",
        summary: [
          "设计国债收益率预测模型（20+宏观因子）。",
          "实盘部署技术因子增强策略（年化17.96%）。",
          "应用Black-Litterman模型优化资产配置。"
        ],
        fullDetails: `**国债收益率预测模型：**
设计了20多个宏观经济因子，并通过 Granger 因果检验和 AIC/BIC 标准优化因子选择，以识别与风险/回报指标的领先关系；构建因子模型以预测回报并识别风险指标；量化边际因子贡献并设定投资组合调整的阈值。

**技术因子增强配置（已进入实盘部署）：**
将多种技术因子趋势跟踪/反转信号特点构建到单边策略中，利用均值-方差优化在单资产层面整合多策略组合；结合全局与尾部风险控制，通过卡玛比与夏普比优化权重配置，实现仓位调整与收益增强。增强策略年化收益至 17.96%，夏普比率 1.77，最大回撤压降至 -10.29%。

**Black-Litterman 宏观配置优化：**
整合宏观概率预测与资产预期收益为 BL 模型观点，运用宏观情景概率倒数调整不确定性参数；针对 16 种宏观情景，基于 MVO 以历史宏观情景概率均值加权计算市场均衡收益。夏普比率提升至 1.06（基准 0.9），年化收益达 5.7%（基准 4.66%）。`
      },
      {
        company: "华泰证券",
        role: "金融工程组实习生",
        period: "2024年9月 – 2025年1月",
        summary: [
          "ETF资金流行业轮动策略（年化>20%）。",
          "搭建多期Brinson归因框架。",
          "开发可转债基金仓位实时估算模型。"
        ],
        fullDetails: `**基于 ETF 资金流构建行业轮动策略：**
提取代表性的 28 个行业 ETF，设计资金流信号指标及资金偏好因子，结合行业分位数构建多空组合；制定调仓规则与择时机制，完成策略开发与稳定性分析。运用长期样本数据（2015–2024）进行回测，结果显示策略在极端资金流情况下具有显著反向预测力，年化收益超过 20%，Sharpe 比率>1，月度胜率接近 70%。

**多期 Brinson 归因模型构建：**
搭建多期 Brinson 归因框架，处理每日行业级持仓与收益数据，支持精细化至行业-日度维度的收益拆解。基于 GRAP 算法设计滚动窗口进行跨期平滑归因，结合 WindPy 自动化数据处理，提升归因结果一致性与分析效率，模型被纳入年度分析流程。

**可转债基金仓位实时估算模型开发：**
搭建估算模型，融合多方法回归框架（OLS/岭回归/Lasso/二次规划），用 PCA 降维解决债券指数共线性。引入季报重仓构建定制化指数，提升拟合精度，系统在非季报时段稳定输出高频仓位估算结果，辅助策略。`
      },
      {
        company: "杉数科技",
        role: "数据分析非标线岗实习生",
        period: "2024年6月 – 2024年9月",
        summary: [
          "海港智能排产数据分析（15万+数据）。",
          "航班销售额预测特征工程。"
        ],
        fullDetails: `**某海港智能排产数据分析与优化：**
用 SQL 与 Python 分析 15 万港口作业数据，构建翻车机效率分析模型，识别关键因素，支撑调度策略优化。梳理全流程作业逻辑，提炼影响吞吐效率的调度规则推动智能排产系统设计。

**航班销售额预测前置分析：**
处理并结构化数万条航班数据，围绕 4 个维度设计特征，构建销售额预测所需的关键变量体系。运用 Python 与 Excel 完成特征工程与可视化分析，识别对销售额影响的关键变量（如节假日敏感度、起飞时间段），辅助后续模型变量筛选与策略优化。`
      },
      {
        company: "中信证券",
        role: "国防军工行研组实习生",
        period: "2024年3月 – 2024年5月",
        summary: [
          "6家军工龙头深度基本面研究。",
          "低空经济产业链与估值建模。"
        ],
        fullDetails: `**行业与公司分析：**
参与军工行业多家上市公司调研与财报分析，独立完成 6 家重点企业年报点评，系统梳理营收结构、利润驱动因子、市场格局、产能扩张与政策导向，支撑专题研究。

**估值与战略分析：**
协助完成“低空经济”专题研究，独立分析两家公司，分别聚焦投资价值和企业战略。系统分析市场空间、竞争格局及产业链动态，构建财务模型，进行盈利预测与横向估值，提出切实可行的投资建议。`
      }
    ],
    projects: [
      {
        title: "瑞银金融精英挑战赛 (UBS)",
        role: "队长",
        period: "2024年5月 – 2024年6月",
        description: "设计LLM-Agent协同系统（GPT-4o + RAG）自动生成每日市场分析报告。构建A股宏观综合数据库，应用FinBERT进行非结构化文本的情绪量化分析。",
        tags: ["大语言模型", "Python", "RAG", "FinBERT"],
        pdfPath: "https://raw.githubusercontent.com/chapteronecloud/zyywebsite/main/files/UBS 挑战赛生成系统介绍.pdf"
      },
      {
        title: "基于ETF资金流的行业轮动策略",
        role: "华泰证券项目",
        period: "2024年9月 – 2025年1月",
        description: "提取28个行业ETF资金流信号，结合行业分位数构建多空组合。回测显示策略在极端资金流下具有显著反向预测力，年化收益超20%，夏普比率>1。",
        tags: ["量化策略", "回测", "ETF", "Python"],
        pdfPath: "files/ETF Flow-based Sector Rotation Strategy.pdf"
      },
      {
        title: "宏观风险NLP识别系统",
        role: "核心成员",
        period: "2025年5月 – 2025年6月",
        description: "搭建爬虫采集1.7万条财经新闻，微调Chinese-RoBERTa-wwm-ext与FinBERT-Tone-Chinese模型，实现十个宏观风险标签的实时情绪量化。设计复合风险因子并模仿Barra风格暴露度回归；开发交互式仪表盘用于风险识别与情绪分析。",
        tags: ["NLP", "深度学习", "网络爬虫", "仪表盘"],
        pdfPath: "files/宏观风险 NLP 系统.pdf"
      },
      {
        title: "财报电话会议增量信息对PEAD的调节作用研究",
        role: "独立研究",
        period: "2024年6月 – 2025年6月",
        description: "管理50万+数据清洗与建模；通过Siamese神经网络和大规模金融语言模型量化MD&A/电话会议披露差异。提出增量信息假说；实证证明更高的增量信息可降低盈余公告后漂移（PEAD）效应，为投资与风险管理提供可行见解。",
        tags: ["NLP", "金融研究", "机器学习", "数据分析"]
      },
      {
        title: "国债收益率曲线建模与宏观预测",
        role: "核心成员",
        period: "2024年10月 – 2024年12月",
        description: "用时变参数VAR替代经典VAR，估计收益率曲线对GDP和CPI的动态预测能力。使用Python和MATLAB提取动态Nelson-Siegel因子；应用MCMC贝叶斯估计与小波相位谱分析，评估利率因子的时频预测特征及其与宏观经济变量的交互作用。",
        tags: ["宏观建模", "时间序列", "Python", "MATLAB"]
      },
      {
        title: "因子动量复制与本土化研究",
        role: "核心成员",
        period: "2024年10月 – 2024年12月",
        description: "完整复现论文框架与方法论；处理47个异象因子并通过Python构建主成分因子；开发时序动量策略，验证因子动量与动量因子之间的关系以及高特征值因子维度中的持续动量效应。构建包含14个A股因子的专有数据库，进行中国市场验证与对比分析。",
        tags: ["量化策略", "因子分析", "Python", "研究"]
      }
    ],
    skills: [
      { 
        category: "编程语言", 
        items: [
          { name: "Python", level: "熟练 (Advanced)", description: "**项目经验：**\n\n• **国债收益率预测模型**：使用 pandas/numpy 构建20+宏观因子，通过 Granger/AIC/BIC 进行因子筛选。\n• **因子择时策略**：使用 cvxpy/scipy.optimize 实现均值-方差优化。\n• **ETF 轮动**：使用 backtrader 构建策略回测。\n• **NLP 系统**：使用 PyTorch 和 Transformers 微调 Chinese-RoBERTa 和构建 Siamese 神经网络。" },
          { name: "C++", level: "中级 (Intermediate)", description: "**核心能力：**\n\n• 具备扎实的面向对象编程基础，熟悉数据结构（链表、树、图）和算法（排序、动态规划）。\n• **应用**：开发迷你银行管理系统。\n• **竞赛**：通过“蓝桥杯”全国软件和信息技术专业人才大赛进行高强度算法训练。" },
          { name: "MySQL", level: "熟练 (Advanced)", description: "**数据库管理：**\n\n• 编写复杂 SQL 查询（多表连接）以识别港口运营瓶颈（杉数科技项目）。\n• 设计和管理云 SQL 数据库以存储财报电话会议数据（数十万条记录）。" },
          { name: "MATLAB", level: "中级 (Intermediate)", description: "**金融建模：**\n\n• 应用 Financial Toolbox 和 Optimization Toolbox。\n• 实现 Black-Litterman 模型和动态 Nelson-Siegel 模型。" }
        ] 
      },
      { 
        category: "数据分析", 
        items: [
          { name: "Stata", level: "熟练 (Advanced)", description: "**实证分析：**\n\n• 对“高管学术经历对 P/E 比率的影响”进行全实证分析（描述性统计、多重共线性测试、OLS 回归、内生性分析）。\n• 在 PEAD 研究中应用面板数据固定效应模型和稳健性检验。" },
          { name: "Excel VBA", level: "中级 (Intermediate)", description: "**自动化：**\n\n• 编写 VBA 脚本自动化清洗、分类和聚合航班销售数据及港口运营报告，显著提高数据处理效率。" },
          { name: "机器学习", level: "熟练 (Advanced)", description: "**技术应用：**\n\n• PCA 降维解决多重共线性。\n• 岭回归 (Ridge Regression)。\n• LSTM 进行时间序列预测。\n• Siamese 神经网络计算语义相似度。" },
          { name: "深度学习", level: "熟练 (Advanced)", description: "**技术与框架：**\n\n• 使用 PyTorch 进行模型训练与优化。\n• Transformer 架构在 NLP 任务中的应用。\n• LightTS 等深度学习时序模型。\n• BERT 微调用于领域特定任务。\n• 用于金融建模的高级神经网络架构。" }
        ] 
      },
      { 
        category: "语言能力", 
        items: [
          { name: "英语", level: "IELTS 7 / GRE 322", description: "熟练的工作能力，能够阅读英文文献及进行专业沟通。" },
          { name: "普通话", level: "母语", description: "母语。" }
        ] 
      }
    ],
    volunteer: [
      {
        role: "志愿者",
        organization: "中国金融学年会",
        period: "2023年10月",
        description: "协助年会现场组织协调，服务1200余名专家学者。负责“数字金融与监管科技”分论坛的嘉宾签到、议程引导与突发情况处理，确保会议顺利进行。",
        link: "https://mp.weixin.qq.com/s/EWT2IwncJYvDHxJb1yEPDw"
      },
      {
        role: "支教老师",
        organization: "美丽中国 (Teach for China)",
        period: "2023年2月 - 2023年5月",
        description: "参与“梦想大老师”项目。秉持“以学生为中心”的价值观，通过“服务学习”模式，在实现个人成长的同时加深对乡村教育的理解，助力教育公平。",
        link: "https://mp.weixin.qq.com/s/pHnpRysn9FbN0zHP_CXpIA"
      },
      {
        role: "田野调查员",
        organization: "北京大学 CHARLS 项目",
        period: "2023年7月 - 2023年8月",
        description: "在云南进行为期2个月的田野调查。运用深度访谈技巧调研老年人健康、医保及收入状况，分析数据并形成医疗养老政策可行性建议。"
      }
    ],
    schoolActivity: [
      {
        role: "成员",
        organization: "中央财经大学区块链协会",
        period: "",
        description: "中央财经大学区块链协会成员。"
      },
      {
        role: "学生干部",
        organization: "中央财经大学学术实践部",
        period: "",
        description: "担任中央财经大学学术实践部学生干部。"
      },
      {
        role: "成员",
        organization: "中央财经大学投行咨询协会 (ICAC)",
        period: "",
        description: "中央财经大学投行咨询协会成员。"
      },
      {
        role: "成员",
        organization: "中央财经大学证券研究会",
        period: "",
        description: "中央财经大学证券研究会成员。"
      }
    ]
  }
};
