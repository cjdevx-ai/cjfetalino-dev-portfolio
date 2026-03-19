import { EXPERIENCE, SkillNames, SKILLS, AFFILIATIONS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="My professional journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-12 relative">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-6 text-zinc-200">
              <Briefcase className="w-6 h-6" /> Work Experience
            </h3>
            <div className="flex flex-col gap-8 md:gap-12 relative">
              {/* Connector Line - simplified to a subtle border */}
              <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

              {EXPERIENCE.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <ExperienceCard experience={exp} index={index} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 mt-12">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-6 text-zinc-200">
              <Users className="w-6 h-6" /> Organizations & Affiliations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {AFFILIATIONS.map((aff, i) => (
                <Card key={i} className="bg-card border-border shadow-sm">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-bold tracking-tight">
                      {aff.title}
                    </CardTitle>
                    <div className="text-sm font-medium text-primary">
                      {aff.company}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {aff.startDate} - {aff.endDate}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {experience.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {experience.company}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {experience.startDate} - {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
