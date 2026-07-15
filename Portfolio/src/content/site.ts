// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT.
// Edit this file to update the site — no component markup needs to change.
// ============================================================================

export const site = {
  name: "Renuka Mulammagari",
  role: "DevOps / Release Engineer",
  location: "Charlotte, NC",
  tagline: "Hi, I'm Renuka — a DevOps Engineer focused on shipping reliable software.",
  summary:
    "4+ years leading enterprise release engineering, CI/CD automation, and production reliability for mission-critical systems in regulated financial-services environments.",
  email: "madem.renu87@gmail.com",
  github: "https://github.com/mademrenu87-prog", // TODO: replace with your GitHub profile/repo URL
  linkedin: "https://linkedin.com/in/your-profile", // TODO: replace with your LinkedIn URL
};

export const terminalFocus = [
  "release governance & CI/CD pipelines",
  "Kubernetes / OpenShift cluster operations",
  "production monitoring & incident response",
  "infrastructure migrations, zero downtime",
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "cloud & platforms",
    skills: ["OpenShift (OCP)", "PCF Cloud", "Tomcat", "Linux", "Windows Server"],
  },
  {
    title: "containerization & kubernetes",
    skills: ["Kubernetes", "OpenShift (OCP)", "Pod Management", "ConfigMaps", "CPU / Memory Tuning"],
  },
  {
    title: "ci/cd & release automation",
    skills: [
      "Git",
      "GitHub",
      "Jenkins",
      "Harness",
      "Urban Code Deploy (UCD)",
      "ServiceNow (CRQ / Governance)",
      "Liquibase",
    ],
  },
  {
    title: "monitoring & observability",
    skills: ["Splunk", "Kafka", "Grafana", "AppDynamics", "ServiceNow Dashboards"],
  },
  {
    title: "apis & data",
    skills: ["Postman", "REST APIs (Java)", "SQL", "Snowflake", "Power BI"],
  },
];

export type Project = {
  id: string;
  command: string;
  title: string;
  description: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  tags: string[]; // used for the interactive filter
};

export const projects: Project[] = [
  {
    id: "load-balancer-migration",
    command: "$ deploy --target load-balancer-migration",
    title: "F5 → VMware AVI Migration",
    description:
      "Led the enterprise load-balancer migration from legacy F5 to VMware AVI for mission-critical production systems, including validation, rollback planning, and live cutover.",
    stack: ["F5", "VMware AVI", "Harness", "UCD", "ServiceNow"],
    metrics: [
      { label: "STATUS", value: "production" },
      { label: "CUTOVER", value: "zero-disruption" },
    ],
    tags: ["release", "infra"],
  },
  {
    id: "mq-to-kafka-api",
    command: "$ deploy --target mq-to-kafka-api",
    title: "MQ → Kafka Messaging Migration",
    description:
      "Built a REST API in Java to support migrating messaging services from IBM MQ to Kafka. Designed and validated the API test suite in Postman before rollout.",
    stack: ["Java", "REST API", "IBM MQ", "Kafka", "Postman"],
    metrics: [
      { label: "STATUS", value: "shipped" },
      { label: "TEST COVERAGE", value: "Postman suite" },
    ],
    tags: ["api", "data"],
  },
  {
    id: "observability-dashboard",
    command: "$ deploy --target observability-dashboard",
    title: "Unified Observability Dashboard",
    description:
      "Integrated Splunk, AppDynamics, and Kafka log data into unified ServiceNow + Grafana dashboards, giving leadership real-time visibility across every environment.",
    stack: ["Grafana", "Splunk", "AppDynamics", "Kafka", "ServiceNow"],
    metrics: [
      { label: "COVERAGE", value: "all environments" },
      { label: "SIGNAL", value: "real-time" },
    ],
    tags: ["monitoring"],
  },
  {
    id: "release-governance",
    command: "$ deploy --target release-governance",
    title: "Enterprise Release Governance",
    description:
      "Owned the change and release governance process across Dev, QA, UAT, and Production — authoring deployment game plans and rollback runbooks for every release.",
    stack: ["ServiceNow", "Jenkins", "Git", "GitHub"],
    metrics: [
      { label: "CRQs MANAGED", value: "1,000+" },
      { label: "ENVIRONMENTS", value: "Dev / QA / UAT / Prod" },
    ],
    tags: ["release"],
  },
  {
    id: "pcf-to-ocp-migration",
    command: "$ kubectl apply --target pcf-to-ocp-migration",
    title: "PCF → OpenShift (K8s) Migration",
    description:
      "Migrated applications from Pivotal Cloud Foundry to OpenShift (Kubernetes) and maintained the resulting environments — managing pods, ConfigMaps, and CPU/memory resource allocation across the cluster.",
    stack: ["Kubernetes", "OpenShift", "PCF Cloud", "ConfigMaps"],
    metrics: [
      { label: "STATUS", value: "production" },
      { label: "OWNS", value: "pods / config / resources" },
    ],
    tags: ["infra", "kubernetes"],
  },
];

export type ExperienceItem = {
  dates: string;
  title: string;
  company: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    dates: "Sep 2023 — Present",
    title: "Senior Software Engineer",
    company: "Wells Fargo",
    description:
      "Leading application deployments and release governance across Dev/QA/UAT/Prod, managing 1,000+ ServiceNow change requests, and driving CI/CD automation with Jenkins, Harness, and Urban Code Deploy. Migrated applications from PCF Cloud to OpenShift (Kubernetes) and maintain the resulting environments — pods, ConfigMaps, and CPU/memory resource allocation.",
  },
  {
    dates: "Mar 2023 — Jun 2023",
    title: "Data Analyst Training",
    company: "Goodwill, NC",
    description:
      "Built Power BI data models and dashboards; translated business requirements into technical reporting specs within an Agile team.",
  },
  {
    dates: "Jun 2022 — Apr 2023",
    title: "Quality / Business Analyst",
    company: "Discover Bank",
    description:
      "Ran SQL analysis against Snowflake, led compliance reconciliation and remediation reporting for regulatory audit readiness.",
  },
];
