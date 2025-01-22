<script setup>
import SectionTitle from "@/components/typography/SectionTitle.vue";
import CallToAction from "@/components/home/CallToAction.vue";
import SectionSubtitle from "@/components/typography/SectionSubtitle.vue";
import MemberCard from "@/components/about/MemberCard.vue";
import WhereAreWe from "@/components/about/WhereAreWe.vue";

const teamMembers = [
  { name: "Jordi Mas", role: "Product Owner" },
  { name: "Albert Prats", role: "UX/UI Designer" },
  { name: "Alba Ortiz", role: "Data Analyst" },
  { name: "Pere Rives", role: "QA Analyst" },
  { name: "Joe Doe", role: "Full Stack Developer" },
  { name: "Juan Perez", role: "Full Stack Developer" },
];
</script>

<template>
  <section class="w-full flex flex-col">
    <div class="p-0 sm:p-4 max-w-screen-xl mx-auto">
      <div class="relative overflow-hidden bg-gradient-to-b from-stone-100 to-transparent pt-12 sm:pt24 sm:rounded-lg">
        <div class="mt-10 sm:mt-20 text-center">
          <SectionTitle text="Get no know us," highlight="Restore The Balance" />
        </div>
        <!-- This is not being transformed to component because I'll try to use the Overview component here as well. -->
        <div class="px-5 sm:px-10 md:px-20 py-5 md:py-10">
          <p class="text-stone-900 text-base md:text-lg my-2">
            At EcoTrail, our mission is to redefine sustainability for businesses by delivering innovative solutions to
            track, reduce, and offset their carbon footprint. Founded on the principles of environmental stewardship and
            technological innovation, we are passionate about helping companies make meaningful contributions to a
            greener planet while achieving their operational goals.
          </p>
          <p class="text-stone-900 text-base md:text-lg my-2">
            EcoTrail was born from the realization that sustainability can be a complex and daunting process for
            businesses of all sizes. Our all-in-one platform simplifies this journey by offering intuitive tools and
            actionable insights tailored to the unique needs of each industry. From advanced carbon tracking algorithms
            to automated sustainability reporting, we empower businesses to navigate the path to Net Zero with
            confidence.
          </p>
          <p class="text-stone-900 text-base md:text-lg my-2">
            Behind EcoTrail is a diverse and dedicated team of experts driven by a shared vision: to create a future
            where businesses thrive in harmony with the environment. With backgrounds in environmental science, software
            development, and business management, our team combines expertise with a deep commitment to sustainability.
            Together, we work tirelessly to ensure our clients have the resources, knowledge, and support they need to
            turn their sustainability goals into reality.
          </p>
          <p class="text-stone-900 text-base md:text-lg my-2">
            We believe that every small step toward sustainability counts, and when businesses come together to adopt
            greener practices, the impact can be transformative. At EcoTrail, we are proud to partner with companies
            worldwide, helping them embrace sustainability as a core part of their operations. By choosing EcoTrail,
            you're not just adopting a tool; you're joining a movement that prioritizes the health of our planet for
            generations to come.
          </p>
          <p class="text-stone-900 text-base md:text-lg">
            Join us in our mission to restore the balance. Together, we can pave the way for a cleaner, more sustainable
            world where businesses and the environment thrive in unison. Meet the passionate individuals behind EcoTrail
            and discover how we're turning ambitious goals into impactful actions every day.
          </p>
        </div>
      </div>

      <SectionSubtitle text="Meet the Team behind" highlight="EcoTrail" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 px-4">
        <MemberCard v-for="member in teamMembers" :key="member.name" :member="member" />
      </div>
      
      <WhereAreWe />
      <CallToAction />
    </div>
  </section>
</template>
